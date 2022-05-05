import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Spinner from '../components/shared/Spinner'
import axios from 'axios'

const Coin = () => {
  // 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=cad&days=30&interval=daily'
  const [coinLoading, setIsCoinLoading] = useState(true)
  const [coin, setCoin] = useState([])

  const params = useParams()

  useEffect(() => {
    getCoin(params.id)
    // eslint-disable-next-line
  }, [])

  const getCoin = async (coinid) => {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinid}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
    )
    setCoin(response.data)
    setIsCoinLoading(false)
  }
  return (
    <>
      {coinLoading && (
        <div>
          <Spinner />
        </div>
      )}
      {!coinLoading && (
        <div>
          <img src={coin.image.large} alt='' />
          <p>{coin.id}</p>
          <p>{coin.symbol}</p>
          <p>{coin.genesis_date}</p>
        </div>
      )}
    </>
  )
}

export default Coin
