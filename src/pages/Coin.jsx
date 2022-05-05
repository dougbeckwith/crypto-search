import React, {useEffect} from 'react'
import {useContext} from 'react'
import {useParams} from 'react-router-dom'
import CoinContext from '../context/CoinsContext'
import Spinner from '../components/shared/Spinner'

const Coin = () => {
  const {coin, setCoin, getCoin, isLoading, setIsLoading} =
    useContext(CoinContext)
  const params = useParams()
  console.log(params.id)
  useEffect(() => {
    setIsLoading(!isLoading)
    const getCoinData = async () => {
      const coinData = await getCoin(params.id)
      console.log(coinData)
      setCoin(coinData)
    }
    getCoinData()
  }, [])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div>
      <img src={coin.image.large} alt='' />
      <p>{coin.id}</p>
      <p>{coin.symbol}</p>
      <p>{coin.genesis_date}</p>
    </div>
  )
}

export default Coin
