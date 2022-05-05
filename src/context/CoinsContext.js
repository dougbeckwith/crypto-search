import {createContext, useState, useEffect} from 'react'
import Spinner from '../components/shared/Spinner'
import axios from 'axios'

const CoinContext = createContext()

export const CoinProvider = ({children}) => {
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [filteredCoins, setFilteredCoins] = useState([])
  const [coin, setCoin] = useState([])
  // const [coinDays, setCoinDays] = useState([])
  // const [coinPrices, setCoinPrices] = useState([])
  // const [coinDaysAndPrices, setDaysAndPrices] = useState([])

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((res) => {
        setCoins(res.data)
        setFilteredCoins(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, [])

  const getCoin = async (coinid) => {
    console.log(coinid)

    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinid}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
    )
    return response.data
  }

  // const getCoinPrices = (coin) => {
  //   axios
  //     .get(
  //       'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=cad&days=30&interval=daily'
  //     )
  //     .then((res) => {
  //       setDaysAndPrices(res.data)
  //       setLoading(false)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //       setLoading(false)
  //     })
  // }

  return (
    <>
      {loading && (
        <div>
          <Spinner />
        </div>
      )}
      {!loading && (
        <CoinContext.Provider
          value={{
            coins: coins,
            coin: coin,
            filteredCoins: filteredCoins,
            getCoin: getCoin,
            setCoin: setCoin,
            setFilteredCoins: setFilteredCoins,
            setLoading: setLoading,
          }}>
          {children}
        </CoinContext.Provider>
      )}
    </>
  )
}

export default CoinContext
