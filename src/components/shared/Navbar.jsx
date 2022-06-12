import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  // State And Function Toggle Nav Menu
  const [IsFaTimes, setIsFaTimes] = useState(false)
  const toggleIcon = () => {
    setIsFaTimes(!IsFaTimes)
  }

  const navLinks = [
    {title: 'Coins', id: 1, link: '/'},
    {title: 'Watchlist', id: 2, link: '../watchlist'},
  ]
  const navLinkList = navLinks.map((item) => {
    return (
      <li key={item.id} className='px-3 font-medium py-10'>
        <NavLink
          onClick={toggleIcon}
          className={(navData) =>
            navData.isActive
              ? 'border-b-2 border-[#5e61fa] text-lg'
              : 'hover:border-b hover:border-[#5e61fa] duration-200 text-lg'
          }
          to={item.link}>
          {item.title}
        </NavLink>
      </li>
    )
  })

  return (
    <nav className='w-full h-[90px] bg-[#ebebe9] border-b border-[#eee] sticky top-0 z-10'>
      <div className='h-full m-auto container flex justify-between items-center px-5'>
        <div className='text-xl sm:text-2xl md:text-3xl text-black font-bold'>
          <span className='text-[#5e61fa]'>Crypto</span> Tracker
        </div>
        {/* Desktop Links */}
        <ul className='hidden md:flex'>{navLinkList}</ul>
        <div
          className='block md:hidden cursor-pointer z-10'
          onClick={toggleIcon}>
          {IsFaTimes ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {/* Mobile Links */}
      {IsFaTimes && (
        <ul className='absolute md:hidden top-[90px] left-0 w-full h-screen bg-[#f7f7f5] flex flex-col items-center'>
          {navLinkList}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
