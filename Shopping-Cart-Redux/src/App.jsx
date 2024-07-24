import React from 'react'
import Navbar from "./components/Navbar"
import { Route, Routes } from 'react-router-dom/dist'
import Home from "./pages/Home"
import Cart from "./pages/Cart"

const App = () => {
  return (
    <div>
    
      <div className='bg-slate-900 opacity-95 fixed top-0 w-screen z-10 backdrop-blur-lg'>
        <Navbar/>
      </div>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>

    </div>
  )
}

export default App
