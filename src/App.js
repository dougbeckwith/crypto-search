import React from 'react'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Coins from './pages/Coins'
import WatchList from './pages/WatchList'
import Coin from './pages/Coin'
import Layout from './components/shared/Layout'
import NotFound from './pages/NotFound'

function App() {
  // To Do Fix Bug Browser Forward/Back buttons not working
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
