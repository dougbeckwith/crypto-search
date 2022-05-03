import React from 'react'

const Button = ({text}) => {
  return (
    <button className='sm:block hidden px-6 py-2.5 rounded-md bg-[#118c4f] text-white'>
      {text}
    </button>
  )
}

export default Button
