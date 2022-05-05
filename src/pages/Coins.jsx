import React, {useEffect, useState} from 'react'
import CoinsTable from '../components/Coins/CoinsTable'
import SearchBar from '../components/Coins/SearchBar'
import Spinner from '../components/shared/Spinner'
import axios from 'axios'

const Coins = () => {
  const [coins, setCoins] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [filteredCoins, setFilteredCoins] = useState([])

  const getCoins = async () => {
    try {
      const response = await axios.get(coinsUrl)
      setCoins(response.data)
      setFilteredCoins(response.data)
      setIsLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getCoins()
  })

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <SearchBar setFilteredCoins={setFilteredCoins} coins={coins} />
          <CoinsTable filteredCoins={filteredCoins} />
        </>
      )}
    </>
  )
}

export default Coins
