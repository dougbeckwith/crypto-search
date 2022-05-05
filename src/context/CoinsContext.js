import {createContext, useEffect, useState} from 'react'
import Spinner from '../components/shared/Spinner'
import axios from 'axios'

const CoinContext = createContext()

export const CoinProvider = ({children}) => {
  const coinsUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false`
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [filteredCoins, setFilteredCoins] = useState([])
  // const [coin, setCoin] = useState([])

  // useEffect(() => {
  //   axios
  //     .get(coinsUrl)
  //     .then((res) => {
  //       setCoins(res.data)
  //       setFilteredCoins(res.data)
  //       setLoading(false)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //       setLoading(false)
  //     })
  // }, [])
  // const updateCoins = (item) => {
  //   setCoins(item)
  // }

  useEffect(() => {
    getCoins()
  }, [])

  console.log('start')
  const getCoins = async () => {
    console.log('start get coins')
    const response = await axios.get(coinsUrl)
    console.log(response.data)
    setCoins(response.data)
    setFilteredCoins(response.data)
    console.log('end get coins')
    setLoading(false)
  }
  console.log('finish')

  // const getCoin = async (coinid) => {
  //   setLoading(true)
  //   console.log('start')
  //   const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinid}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`)
  //   console.log(response)
  //   setCoin(response)
  //   console.log('end')
  //   setLoading(false)
  // }

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
            // coin: coin,
            filteredCoins: filteredCoins,
            // getCoin: getCoin,
            getCoins: getCoins,
            setFilteredCoins: setFilteredCoins,
          }}>
          {children}
        </CoinContext.Provider>
      )}
    </>
  )
}

export default CoinContext
