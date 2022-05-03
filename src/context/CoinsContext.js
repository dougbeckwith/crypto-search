import {createContext, useState, useEffect} from 'react'
import Spinner from '../components/shared/Spinner'
import axios from 'axios'

const CoinContext = createContext()

export const CoinProvider = ({children}) => {
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [filteredCoins, setFilteredCoins] = useState([])

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
            filteredCoins: filteredCoins,
            setFilteredCoins: setFilteredCoins,
          }}>
          {children}
        </CoinContext.Provider>
      )}
    </>
  )
}

export default CoinContext
