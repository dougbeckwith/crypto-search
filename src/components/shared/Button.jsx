import React from 'react'

const Button = ({text}) => {
  return (
    <button className='bg-[#f7f7f5] px-4 py-1.5 rounded-md border border-[#595cfd] text-[#595cfd] text-[18px] hover:shadow-xl'>
      {text}
    </button>
  )
}

export default Button
