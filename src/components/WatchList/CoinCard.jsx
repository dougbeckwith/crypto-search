import React from 'react'
import {CgClose} from 'react-icons/cg'

const CoinCard = ({coin, handleDelete, handleClick}) => {
  return (
    <div
      onClick={(e) => handleClick(e, coin.id)}
      className='shadow-lg w-full rounded-md py-3 px-3 mb-2 bg-[#f7f7f5] flex items-center justify-between hover:bg-[#ebebe9] hover:cursor-pointer'>
      <div className='w-full flex items-center justify-between'>
        <div>
          <img className='w-12 md:w-20' src={coin.image} alt='' />
        </div>
        <div className=''>
          <p className='hidden sm:block text-xl'>
            {coin.id.charAt(0).toUpperCase() + coin.id.slice(1)}
          </p>
          <p className='text-lg'>{coin.symbol.toUpperCase()}</p>
        </div>
        <div className=''>
          <p className='text-xl hidden sm:block'>Price</p>
          <p className='text-lg'>
            ${coin.current_price.toLocaleString('en-US')}
          </p>
        </div>
        <div className='hidden sm:block'>
          <p className='text-xl'>24H %</p>
          <p
            className={
              coin.price_change_percentage_24h >= 0
                ? 'text-lg  text-[green] '
                : 'text-lg  text-[red]'
            }>
            {coin.price_change_percentage_24h.toFixed(2)}
          </p>
        </div>
        <div className='hidden lg:block'>
          <p className='text-xl'>ATH</p>
          <p className='text-lg'>${coin.ath.toLocaleString()}</p>
        </div>
        <div className='hidden lg:block'>
          <p className='text-xl'>ATH %</p>
          <p
            className={
              coin.ath_change_percentage >= 0
                ? 'text-right text-lg  text-[green] '
                : 'text-right text-lg  text-[red]'
            }>
            {coin.ath_change_percentage.toFixed(2)}
          </p>
        </div>
        <div
          onClick={() => handleDelete(coin)}
          className='delete border-2 border-transparent hover:cursor-pointer hover:border-2 hover:border-[#5e61fa] hover:rounded'>
          <CgClose size={30} color='#5e61fa' />
        </div>
      </div>
    </div>
  )
}

export default CoinCard
