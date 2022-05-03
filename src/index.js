import {createRoot} from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App'
import Coins from './pages/Coins'
import Coin from './pages/Coin'
import {CoinProvider} from './context/CoinsContext'
import NotFound from './pages/NotFound'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <CoinProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Coins />} />
          <Route path='coin/:id' element={<Coin />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </CoinProvider>
)
