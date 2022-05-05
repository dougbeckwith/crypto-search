import {createContext, useEffect, useState} from 'react'
import Spinner from '../components/shared/Spinner'
import axios from 'axios'

const CoinContext = createContext()

export const CoinProvider = ({children}) => {
  const coinsUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false`
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(false)
  const [filteredCoins, setFilteredCoins] = useState([])
  const [coin, setCoin] = useState([])

  // useEffect(() => {
  //   getCoins()
  // }, [])

  // const getCoins = async () => {
  //   try {
  //     const response = await axios.get(coinsUrl)
  //     setCoins(response.data)
  //     setFilteredCoins(response.data)
  //     setLoading(false)
  //   } catch (err) {
  //     console.log(err)
  //   }
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
          value={
            {
              // coins: coins,
              // coin: coin,
              // filteredCoins: filteredCoins,
              // setLoading: setLoading,
              // getCoin: getCoin,
              // // getCoins: getCoins,
              // setFilteredCoins: setFilteredCoins,
            }
          }>
          {children}
        </CoinContext.Provider>
      )}
    </>
  )
}

export default CoinContext
