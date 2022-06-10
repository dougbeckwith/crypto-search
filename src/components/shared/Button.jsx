import React from 'react'

const Button = ({text}) => {
  return (
    <button className='px-4 py-1.5 rounded-md border border-[#595cfd] text-[#595cfd] text-[18px]'>
      {text}
    </button>
  )
}

export default Button
