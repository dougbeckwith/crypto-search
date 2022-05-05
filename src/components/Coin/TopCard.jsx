import React from 'react'
import Stat from './Stat'

const CoinTopCard = ({coin}) => {
  console.log(coin)
  return (
    <div className='w-full rounded-md py-3 px-3 mb-2 bg-[white] flex items-center'>
      <div>
        <img className='w-20' src={coin.image.large} alt='' />
      </div>
      <div className='pl-5'>
        <p className='text-xl'>
          {coin.id.charAt(0).toUpperCase() + coin.id.slice(1)}
        </p>
        <p>{coin.symbol.toUpperCase()}</p>
      </div>
      <div className='pl-10 flex justify-between w-full'>
        <Stat value={coin.market_data.current_price.cad} title={'Price'} />
        <Stat
          value={coin.market_data.price_change_percentage_24h_in_currency.cad.toFixed(
            2
          )}
          title={'24H %'}
        />
        <Stat value={coin.market_data.ath.cad} title={'ATH'} />
        <Stat
          className='text-green-300'
          value={coin.market_data.ath_change_percentage.cad.toFixed(2)}
          title={'ATH %'}
        />
      </div>
    </div>
  )
}

export default CoinTopCard
