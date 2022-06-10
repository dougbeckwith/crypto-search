import React from 'react'
import {useState, useEffect} from 'react'
import CoinCard from '../components/WatchList/CoinCard'

const WatchList = () => {
  const [watchListCoins, setWatchListCoins] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const setData = async () => {
      const coins = await JSON.parse(localStorage.getItem('watchListCoins'))
      setWatchListCoins(coins)
      setIsLoading(false)
      console.log('here')
      console.log(coins)
    }
    setData()
  }, [])

  return (
    <>
      <h1>WatchList</h1>
      {!isLoading &&
        watchListCoins.map((coin) => {
          console.log(coin)
          return <CoinCard coin={coin} />
        })}
    </>
  )
}

export default WatchList
