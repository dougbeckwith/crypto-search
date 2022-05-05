import React from 'react'

const Stat = ({value, title}) => {
  let textColor
  if (title === '24H %' && value < 0) {
    textColor = 'text-red-600'
  } else if (title === '24H %' && value > 0) {
    textColor = 'text-green-600'
  } else {
    textColor = 'text-black'
  }
  return (
    <div>
      <p>{title}</p>
      <p className={textColor}>{value}</p>
    </div>
  )
}

export default Stat
