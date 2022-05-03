import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Navbar = () => {
  // State And Function Toggle Nav Menu
  const [IsFaTimes, setIsFaTimes] = useState(false)
  const toggleIcon = () => {
    setIsFaTimes(!IsFaTimes)
  }

  const navLinks = [{title: 'Coins', id: 1, link: '/'}]
  const navLinkList = navLinks.map((item) => {
    return (
      <li key={item.id} className='px-3 font-medium'>
        <Link to={item.link}>{item.title}</Link>
      </li>
    )
  })

  return (
    <nav className='w-full h-[90px] bg-[#fff] border-b border-[#eee] sticky top-0 z-10'>
      <div className='h-full m-auto container flex justify-between items-center px-5'>
        <div className='text-5xl text-black font-bold'>
          Cry<span className='text-[#118c4f]'>pto</span>
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
        <ul className='absolute md:hidden top-[90px] left-0 w-full h-[200px] bg-white flex flex-col justify-around items-center'>
          {navLinkList}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
