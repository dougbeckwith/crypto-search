import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Spinner from '../components/shared/Spinner'
import axios from 'axios'

const Coin = () => {
  // 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=cad&days=30&interval=daily'
  const [coinLoading, setIsCoinLoading] = useState(true)
  const [coin, setCoin] = useState([])

  const params = useParams()
  console.log(params.id)

  useEffect(() => {
    console.log('effect here')
    console.log(params.id)
    getCoin(params.id)
  }, [])

  const getCoin = async (coinid) => {
    console.log('start get coin')
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinid}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
    )
    console.log(response.data)
    setCoin(response.data)
    setIsCoinLoading(false)
    console.log('end get coin')
  }
  console.log('end of file')
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
