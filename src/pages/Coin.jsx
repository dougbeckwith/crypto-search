import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Spinner from '../components/shared/Spinner'
import axios from 'axios'
import TopCard from '../components/Coin/TopCard'
import Chart from '../components/Coin/Chart'

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
        <div className='w-full bg-[#f7f7f5] h-screen'>
          <div className='container m-auto flex just-center items-center'>
            <Spinner />
          </div>
        </div>
      )}
      <div className='w-full bg-[#f7f7f5]'>
        <div className='container m-auto pt-10'>
          {!coinLoading && (
            <>
              <TopCard coin={coin} /> <Chart />
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Coin
