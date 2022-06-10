import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Spinner from '../components/shared/Spinner'
import axios from 'axios'
import TopCard from '../components/Coin/TopCard'
import Chart from '../components/Coin/Chart'
import {useNavigate} from 'react-router-dom'

const Coin = () => {
  const [coinLoading, setIsCoinLoading] = useState(true)
  const [coin, setCoin] = useState([])
  const {coinId} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const getCoin = async (coinid) => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${coinid}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
        )
        setCoin(response.data)
        setIsCoinLoading(false)
      } catch (err) {
        navigate('/notfound')
        console.log(err)
      }
    }
    getCoin(coinId)
    // eslint-disable-next-line
  }, [])

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
              <TopCard coin={coin} />
              <Chart />
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Coin
