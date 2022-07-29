import {useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import CoinCard from './components/CoinCard'
import {useNavigate} from 'react-router-dom'
import EmptyWatchListMessage from './components/EmptyWatchList'
import axios from 'axios'

const WatchList = () => {
  const [coins, setCoins] = useState([])
  const [watchListCoins, setWatchListCoins] = useState([])
  const [showMessage, setShowMessage] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  // GET coins and sets WatchList state
  useEffect(() => {
    const getCoins = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false'
        )
        setCoins(response.data)
        setWatchList(response.data)
      } catch (err) {
        navigate('/notfound')
        console.log(err)
      }
    }
    getCoins()

    // eslint-disable-next-line
  }, [])

  // Get coins local storage
  const getCoinsLocalStorage = () => {
    const localCoins = JSON.parse(localStorage.getItem('watchListCoins'))
    return localCoins
  }

  // Update coins local storage
  const setCoinsLocalStorage = (coins) => {
    localStorage.setItem('watchListCoins', JSON.stringify(coins))
  }

  // Returns array of coins with the coin clicked removed
  const filterCoinClicked = (coin, localCoins) => {
    const filteredLocalCoins = localCoins.filter((localCoin) => {
      return localCoin !== coin.id
    })
    return filteredLocalCoins
  }

  // Takes in all (coins array) and uses (localCoins array) to filter through all the coins
  // and returns a filtered array used for watchlist coin state
  const filterCoinsFromLocalStorageCoins = (coins, localCoins) => {
    const filteredStateCoins = coins.filter((item) => {
      return localCoins.includes(item.id)
    })
    return filteredStateCoins
  }

  // Deletes coin from watch list and updates coin watchlist state
  const handleDelete = (coin) => {
    const localCoins = getCoinsLocalStorage()
    const updatedLocalStorageCoins = filterCoinClicked(coin, localCoins)
    const updatedWatchlistCoins = filterCoinsFromLocalStorageCoins(
      coins,
      localCoins
    )
    setCoinsLocalStorage(updatedLocalStorageCoins)
    setWatchList(updatedWatchlistCoins)
  }

  // If user clicks on delete button remove coin from watchlist
  // If use clicked on card navigate to coin page
  const handleClick = (e, id) => {
    if (
      e.target.tagName === 'svg' ||
      e.target.classList.contains('delete') ||
      e.target.tagName === 'path'
    ) {
      return
    } else {
      navigate(`/${id}`)
    }
  }

  // Gets coins from local storage (coins is reponse.data all coins)
  // If no local coins display EmptyWatchList component
  // Else set state of watch list coins and display watclist coins list
  const setWatchList = async (coins) => {
    const localCoins = await getCoinsLocalStorage()
    if (localCoins.length === 0) {
      setShowMessage(true)
      setIsLoading(false)
      return
    }
    const filteredStateCoins = filterCoinsFromLocalStorageCoins(
      coins,
      localCoins
    )
    setWatchListCoins(filteredStateCoins)
    setIsLoading(false)
  }

  return (
    <>
      <div className='w-full bg-[#f7f7f5] min-h-screen max-h-min '>
        <div className='container m-auto pt-10'>
          {showMessage && <EmptyWatchListMessage />}
          {!isLoading &&
            watchListCoins.map((coin) => {
              return (
                <CoinCard
                  key={uuidv4()}
                  coin={coin}
                  handleDelete={handleDelete}
                  handleClick={handleClick}
                />
              )
            })}
        </div>
      </div>
    </>
  )
}

export default WatchList
