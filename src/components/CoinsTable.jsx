import React from 'react'
import {useContext} from 'react'
import CoinContext from '../context/CoinsContext'
import CoinItem from './CoinItem'

const Coins = () => {
  const {filteredCoins} = useContext(CoinContext)
  return (
    <>
      <div className='w-full bg-white pb-[50px]'>
        <div className='m-auto container flex justify-center'>
          <table className='w-full'>
            <thead>
              <tr className='border-b text-left'>
                <th className='pl-2'>#</th>
                <th>Name</th>
                <th className='hidden lg:table-cell'>Ticker</th>
                <th className='pr-2 text-right'>Price CAD</th>
                <th className='text-right hidden lg:table-cell'>Volume</th>
                <th className='text-right hidden 2xl:table-cell'>24H %</th>
                <th className='text-right hidden md:table-cell pr-2'>
                  Marketcap
                </th>
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
