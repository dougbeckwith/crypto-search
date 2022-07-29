import {Link} from 'react-router-dom'
import Button from '../../../components/shared/Button'

const EmptyWatchListMessage = () => {
  return (
    <div className='bg-[#f7f7f5] h-screen flex justify-center'>
      <div className='text-center'>
        <h1 className='text-2xl md:text-4xl mb-8'>WatchList Empty</h1>
        <p className='text-lg md:text-2xl mb-8'>
          Please go back and add a coin
        </p>
        <Link to='/'>
          <Button text={'Coins'} />
        </Link>
      </div>
    </div>
  )
}

export default EmptyWatchListMessage
