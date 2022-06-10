import React from 'react'
import {SpinnerDotted} from 'spinners-react'

const Spinner = () => {
  return (
    <div className='w-full bg-[#f7f7f5] h-screen flex justify-center items-center'>
      <SpinnerDotted size={90} thickness={100} speed={100} color='#36ad47' />
    </div>
  )
}

export default Spinner
