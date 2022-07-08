import React from 'react'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Coins from './pages/coins/Coins'
import WatchList from './pages/watchlist/WatchList'
import Coin from './pages/coin/Coin'
import Layout from './components/shared/Layout'
import NotFound from './pages/notfound/NotFound'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Coins />} />
            <Route path=':coinId' element={<Coin />} />
            <Route path='watchlist' element={<WatchList />} />
          </Route>
          <Route path='/notfound' element={<Layout />}>
            <Route index element={<NotFound />} />
          </Route>
          <Route path='*' element={<Layout />}>
            <Route index element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
