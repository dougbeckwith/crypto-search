import React from 'react'
import {v4 as uuidv4} from 'uuid'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'

const CoinItem = ({coin, index}) => {
  const navigate = useNavigate()
  const [hover, setHover] = useState(false)

  function saveDataToLocalStorage(coin) {
    var coins = []
    coins = JSON.parse(localStorage.getItem('watchListCoins')) || []
    const isIn = coins.some((item) => {
      return item.id === coin.id
    })
    if (isIn === true) {
      localStorage.setItem('watchListCoins', JSON.stringify(coins))
    } else {
      coins.push(coin)
      localStorage.setItem('watchListCoins', JSON.stringify(coins))
    }
  }

  const handleClick = (e, id) => {
    if (e.target.textContent === 'Add' && e.target.tagName === 'BUTTON') {
      saveDataToLocalStorage(coin)
    } else {
      navigate(id)
    }
  }

  const handleMouseOver = (e) => {
    if (e.target.textContent === 'Add' && e.target.tagName === 'BUTTON') {
      setHover(false)
    } else if (e.target.className === 'text-right pr-2 button') {
      setHover(false)
    } else {
      setHover(true)
    }
  }
  const handleMouseLeave = () => {
    setHover(false)
  }
  return (
    <tr
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onClick={(e) => handleClick(e, coin.id)}
      key={uuidv4()}
      className={
        hover
          ? 'border-b h-[65px] text-lg  cursor-pointer hover:bg-[#ebebe9]'
          : 'border-b h-[65px] text-lg'
      }>
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
      <td className='text-right pr-2 button'>
        <button className='bg-[#f7f7f5] px-4 py-1.5 rounded-md border border-[#595cfd] text-[#595cfd] text-[18px] hover:shadow-xl hover:text-white hover:bg-[#595cfd]'>
          Add
        </button>
      </td>
    </tr>
  )
}

export default CoinItem
