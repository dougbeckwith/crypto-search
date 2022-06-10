import React, {useEffect, useState} from 'react'
import CoinsTable from '../components/Coins/CoinsTable'
import SearchBar from '../components/Coins/SearchBar'
import Spinner from '../components/shared/Spinner'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Header from '../components/Coins/Header'

const Coins = () => {
  const [coins, setCoins] = useState([])
  const [filteredCoins, setFilteredCoins] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  console.log(coins)
  const navigate = useNavigate()

  const coinsUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false`
  const getCoins = async () => {
    try {
      const response = await axios.get(coinsUrl)
      setCoins(response.data)
      setFilteredCoins(response.data)
      setIsLoading(false)
    } catch (err) {
      navigate('/notfound')
      console.log(err)
    }
  }

  useEffect(() => {
    getCoins()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Header />
          <SearchBar setFilteredCoins={setFilteredCoins} coins={coins} />
          <CoinsTable filteredCoins={filteredCoins} />
        </>
      )}
    </>
  )
}

export default Coins
