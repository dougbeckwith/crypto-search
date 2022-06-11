import React from 'react'
import {useState, useEffect} from 'react'
import CoinCard from '../components/WatchList/CoinCard'
import {v4 as uuidv4} from 'uuid'

const WatchList = () => {
  const [watchListCoins, setWatchListCoins] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [reRender, setReRender] = useState(true)

  useEffect(() => {
    const setData = async () => {
      const coins = await JSON.parse(localStorage.getItem('watchListCoins'))
      setWatchListCoins(coins)
      setIsLoading(false)
    }
    setData()
  }, [reRender])

  function saveDataToLocalStorage(coin) {
    let a = []
    a = JSON.parse(localStorage.getItem('watchListCoins'))
    let updateA = a.filter((item) => {
      return item.id !== coin.id
    })

    localStorage.setItem('watchListCoins', JSON.stringify(updateA))
    setReRender(!reRender)
  }

  const handleDelete = (coin) => {
    saveDataToLocalStorage(coin)
  }

  return (
    <>
      <div className='w-full bg-[#f7f7f5] min-h-screen max-h-min '>
        <div className='container m-auto pt-10'>
          {!isLoading &&
            watchListCoins.map((coin) => {
              return (
                <CoinCard
                  key={uuidv4()}
                  coin={coin}
                  handleDelete={handleDelete}
                />
              )
            })}
        </div>
      </div>
    </>
  )
}

export default WatchList
