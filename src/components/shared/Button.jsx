import React from 'react'

const Button = ({text}) => {
  return (
    <button className='bg-[#595cfd] px-4 py-1.5 rounded-md border border-[#595cfd] text-white text-[18px] hover:shadow-xl'>
      {text}
    </button>
  )
}

export default Button
