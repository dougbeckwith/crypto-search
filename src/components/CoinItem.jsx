import React from 'react'

const CoinItem = ({coin}) => {
  return (
    <tr
      key={coin.id}
      className='border-b h-[60px] cursor-pointer hover:bg-slate-100'>
      <td className='pl-2'>{index + 1}</td>
      <td>
        <div className='flex items-center'>
          <img className='w-[45px]' src={coin.image} alt='' />
          {coin.name}
        </div>
      </td>
      <td className='hidden lg:table-cell'>{coin.symbol.toUpperCase()}</td>
      <td className='text-right pr-2'>${coin.current_price}</td>
      <td className='text-right hidden lg:table-cell'>
        ${coin.total_volume.toLocaleString('en-US')}
      </td>
      <td
        className={
          coin.price_change_percentage_24h >= 0
            ? 'text-right hidden 2xl:table-cell text-[green] '
            : 'text-right hidden 2xl:table-cell text-[red]'
        }>
        {coin.price_change_percentage_24h.toFixed(2)}%
      </td>
      <td className='text-right hidden md:table-cell pr-2'>
        ${coin.market_cap.toLocaleString('en-US')}
      </td>
    </tr>
  )
}

export default CoinItem
