import React from 'react'

const SearchBar = ({setFilteredCoins, coins}) => {
  const handleChange = (e) => {
    setFilteredCoins(
      coins.filter((coin) => {
        return coin.name.toLowerCase().includes(e.target.value.toLowerCase())
      })
    )
  }

  return (
    <div className='py-7 bg-[#f7f7f5]'>
      <div className='container mx-auto flex justify-center'>
        <div className='xl:w-96'>
          <input
            type='text'
            className='
          block
          w-full
          px-4
          py-2
          text-xl
          font-normal
          text-black
          bg-white bg-clip-padding
          border-2 border-solid border-gray-400
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-[#118c4f] focus:border-2 focus:outline-none
        '
            placeholder='Search'
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  )
}

export default SearchBar
