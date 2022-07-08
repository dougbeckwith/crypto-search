import React from 'react'
import {useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import CoinCard from './components/CoinCard'
import {useNavigate} from 'react-router-dom'
import EmptyWatchListMessage from './components/EmptyWatchList'
import axios from 'axios'

const WatchList = () => {
  const [coins, setCoins] = useState([])
  const [watchListCoins, setWatchListCoins] = useState([])
  const [showMessage, setShowMessage] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  const getCoinsLocalStorage = () => {
    const localCoins = JSON.parse(localStorage.getItem('watchListCoins'))
    return localCoins
  }

  const setCoinsLocalStorage = (coins) => {
    localStorage.setItem('watchListCoins', JSON.stringify(coins))
  }

  const filterCoinClicked = (coin, localCoins) => {
    const filteredLocalCoins = localCoins.filter((localCoin) => {
      return localCoin !== coin.id
    })
    return filteredLocalCoins
  }

  const filterCoinsFromLocalStorageCoins = (coins, localCoins) => {
    const filteredStateCoins = coins.filter((item) => {
      return localCoins.includes(item.id)
    })
    return filteredStateCoins
  }

  const handleDelete = (coin) => {
    const localCoins = getCoinsLocalStorage()
    const updatedLocalStorageCoins = filterCoinClicked(coin, localCoins)
    const updatedWatchlistCoins = filterCoinsFromLocalStorageCoins(
      coins,
      localCoins
    )
    setCoinsLocalStorage(updatedLocalStorageCoins)
    setWatchList(updatedWatchlistCoins)
  }

  const handleClick = (e, id) => {
    if (
      e.target.tagName === 'svg' ||
      e.target.classList.contains('delete') ||
      e.target.tagName === 'path'
    ) {
      return
    } else {
      navigate(`/${id}`)
    }
  }

  const setWatchList = async (coins) => {
    const localCoins = await getCoinsLocalStorage()
    if (localCoins.length === 0) {
      setShowMessage(true)
    }
    const filteredStateCoins = filterCoinsFromLocalStorageCoins(
      coins,
      localCoins
    )
    setWatchListCoins(filteredStateCoins)
    setIsLoading(false)
  }

  useEffect(() => {
    const coinsUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    const getCoins = async () => {
      try {
        const response = await axios.get(coinsUrl)
        setCoins(response.data)
        setWatchList(response.data)
      } catch (err) {
        navigate('/notfound')
        console.log(err)
      }
    }
    setIsLoading(true)
    getCoins()

    // eslint-disable-next-line
  }, [])

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
