import React from 'react'
import CoinItem from './CoinItem'

const Coins = ({filteredCoins}) => {
  return (
    <>
      <div className='w-full bg-white pb-[50px]'>
        <div className='m-auto container flex justify-center'>
          <table className='w-full'>
            <thead>
              <tr className='border-b text-left'>
                <th className='pl-2'>#</th>
                <th>Name</th>
                <th className='text-right hidden'>Ticker</th>
                <th className='text-right hidden'>Price CAD</th>
                <th className='text-right hidden'>Volume</th>
                <th className='text-right hidden'>24H %</th>
                <th className='text-right hidden'>Marketcap</th>
                <th className='text-right pr-2'>Links</th>
              </tr>
            </thead>
            <tbody>
              {filteredCoins.map((coin, index) => (
                <CoinItem key={coin.id} coin={coin} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Coins
