import React from 'react'
import {useState, useEffect} from 'react'
import CoinCard from '../components/WatchList/CoinCard'
import {v4 as uuidv4} from 'uuid'
import EmptyWatchListMessage from '../components/WatchList/EmptyWatchList'
import {useNavigate} from 'react-router-dom'

const WatchList = () => {
  const [watchListCoins, setWatchListCoins] = useState([])
  const [showMessage, setShowMessage] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [reRender, setReRender] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const setData = async () => {
      const coins = await JSON.parse(localStorage.getItem('watchListCoins'))
      if (coins.length === 0) {
        setShowMessage(true)
      }
      setWatchListCoins(coins)
      setIsLoading(false)
    }
    setData()
  }, [reRender])

  function saveDataToLocalStorage(coin) {
    let coins = []
    coins = JSON.parse(localStorage.getItem('watchListCoins'))
    let filteredCoins = coins.filter((item) => {
      return item.id !== coin.id
    })

    localStorage.setItem('watchListCoins', JSON.stringify(filteredCoins))
    setReRender(!reRender)
  }

  const handleDelete = (coin) => {
    saveDataToLocalStorage(coin)
  }

  const handleClick = (e, id) => {
    console.log(e.target)
    if (e.target.tagName === 'svg' || e.target.classList.contains('delete')) {
      return
    } else {
      navigate(`/${id}`)
    }
  }

  return (
    <>
      <div className='w-full bg-[#f7f7f5] min-h-screen max-h-min '>
        <div className='container m-auto pt-10'>
          {showMessage && <EmptyWatchListMessage />}
          {!isLoading &&
            watchListCoins.map((coin) => {
              return (
                <CoinCard
                  key={uuidv4()}
                  coin={coin}
                  handleDelete={handleDelete}
                  handleClick={handleClick}
                />
              )
            })}
        </div>
      </div>
    </>
  )
}

export default WatchList
