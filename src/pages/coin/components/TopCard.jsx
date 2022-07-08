import React from 'react'

const CoinTopCard = ({coin}) => {
  return (
    <div className='w-full rounded-md py-3 px-3 mb-2 bg-[#f7f7f5] flex items-center justify-between'>
      <div>
        <img className='w-20' src={coin.image.large} alt='' />
      </div>
      <div className=''>
        <p className='text-lg md:text-xl'>
          {coin.id.charAt(0).toUpperCase() + coin.id.slice(1)}
        </p>
        <p className='text-md md:text-lg'>{coin.symbol.toUpperCase()}</p>
      </div>
      <div className=''>
        <p className='text-lg md:text-xl'>Price</p>
        <p className='text-md md:text-lg'>
          ${coin.market_data.current_price.cad.toLocaleString('en-US')}
        </p>
      </div>
      <div className='hidden sm:block'>
        <p className='text-xl'>24H %</p>
        <p
          className={
            coin.market_data.price_change_percentage_24h_in_currency.cad >= 0
              ? 'text-lg  text-[green] '
              : 'text-lg  text-[red]'
          }>
          {coin.market_data.price_change_percentage_24h_in_currency.cad.toFixed(
            2
          )}
        </p>
      </div>
      <div className='hidden lg:block'>
        <p className='text-xl'>ATH</p>
        <p className='text-lg'>${coin.market_data.ath.cad.toLocaleString()}</p>
      </div>
      <div className='hidden lg:block'>
        <p className='text-xl'>ATH %</p>
        <p
          className={
            coin.market_data.ath_change_percentage.cad >= 0
              ? 'text-right text-lg  text-[green] '
              : 'text-right text-lg  text-[red]'
          }>
          {coin.market_data.ath_change_percentage.cad.toFixed(2)}
        </p>
      </div>
    </div>
  )
}

export default CoinTopCard
