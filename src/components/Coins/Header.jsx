import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-[#f7f7f5] pt-4'>
      <p className='text-2xl pb-2 lg:text-3xl'>
        Cryptocurrency Prices by Market Cap
      </p>
      <p className='text-lg lg:text-xl'>Search and create your own Watchlist</p>
    </div>
  )
}

export default Header
