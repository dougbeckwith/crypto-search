import React from 'react'
import Button from '../shared/Button'
import {v4 as uuidv4} from 'uuid'
import {useNavigate} from 'react-router-dom'

const CoinItem = ({coin, index}) => {
  const navigate = useNavigate()

  function saveDataToLocalStorage(coin) {
    var a = []
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem('watchListCoins')) || []
    // Push the new data (whether it be an object or anything else) onto the array
    const isIn = a.some((item) => {
      return item.id === coin.id
    })
    if (isIn === true) {
      // Re-serialize the array back into a string and store it in localStorage
      localStorage.setItem('watchListCoins', JSON.stringify(a))
    } else {
      a.push(coin)
      // Re-serialize the array back into a string and store it in localStorage
      localStorage.setItem('watchListCoins', JSON.stringify(a))
    }
  }

  const handleClick = (e, id) => {
    if (e.target.textContent === 'Add' && e.target.tagName === 'BUTTON') {
      console.log(coin.id)
      saveDataToLocalStorage(coin)
    } else {
      navigate(id)
    }
  }

  return (
    <tr
      onClick={(e) => handleClick(e, coin.id)}
      key={uuidv4()}
      className='border-b h-[65px] text-lg  cursor-pointer hover:bg-slate-100'>
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
        <Button text={'Add'} />
      </td>
    </tr>
  )
}

export default CoinItem
