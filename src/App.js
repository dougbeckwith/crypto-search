import React from 'react'
import './index.css'
import Navbar from './components/shared/Navbar'
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
