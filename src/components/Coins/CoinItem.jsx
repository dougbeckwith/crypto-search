import React from 'react'
import {Link} from 'react-router-dom'
import Button from '../shared/Button'
import {v4 as uuidv4} from 'uuid'
import {useNavigate} from 'react-router-dom'

const CoinItem = ({coin, index}) => {
  const navigate = useNavigate()
  const handleClick = (id) => {
    navigate(id)
  }

  return (
    <tr
      onClick={() => handleClick(coin.id)}
      key={uuidv4()}
      className='border-b h-[65px] text-lg cursor-pointer hover:bg-slate-100'>
      <td className='pl-2'>{index + 1}</td>
      <td>
        <div className='flex items-center'>
          <img className='w-[45px]' src={coin.image} alt='' />
          <p className='pl-3'>{coin.name}</p>
        </div>
      </td>
      <td className='hidden sm:table-cell'>{coin.symbol.toUpperCase()}</td>
      <td className='hidden md:table-cell text-right pr-2 md:pr-0'>
        ${coin.current_price.toLocaleString('en-US')}
      </td>
      <td className='text-right hidden 2xl:table-cell'>
        ${coin.total_volume.toLocaleString('en-US')}
      </td>
      <td
        className={
          coin.price_change_percentage_24h >= 0
            ? 'text-right hidden lg:table-cell text-[green] '
            : 'text-right hidden lg:table-cell text-[red]'
        }>
        {coin.price_change_percentage_24h.toFixed(2)}%
      </td>
      <td className='text-right hidden xl:table-cell'>
        ${coin.market_cap.toLocaleString('en-US')}
      </td>
      <td className='text-right pr-2'>
        <Link to={`${coin.id}`}>
          <Button text={'View'} />
        </Link>
      </td>
    </tr>
  )
}

export default CoinItem
