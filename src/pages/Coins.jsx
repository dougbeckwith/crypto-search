import React, {useEffect} from 'react'
import CoinsTable from '../components/Coins/CoinsTable'
import SearchBar from '../components/Coins/SearchBar'
const Coins = () => {
  return (
    <>
      <SearchBar />
      <CoinsTable />
    </>
  )
}

export default Coins
