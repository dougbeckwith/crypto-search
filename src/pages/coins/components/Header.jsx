import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-[#f7f7f5] pt-4'>
      <p className='hidden md:block md:pb-2 md:text-3xl'>
        Cryptocurrency Prices by Market Cap
      </p>
      <p className='hidden md:block text-xl'>
        Search and create your own Watchlist
      </p>
    </div>
  )
}

export default Header
