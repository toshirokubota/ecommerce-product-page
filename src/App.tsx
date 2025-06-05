import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SamplePage from './pages/SamplePage'
import Header from './components/Header'
import type { CartItemType } from './types'

function App() {
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [showCart, setShowCart] = useState(false);

  return (
    <BrowserRouter basename="/ecommerce-product-page">
      <Header items={cart} showCart={setShowCart} cartIsShown={showCart} setCart={setCart}/>

      <Routes>
        <Route path="/" element={<SamplePage setCart={setCart}/>} />
        <Route path="/collections" element={<SamplePage setCart={setCart}/>} />
        <Route path="/men" element={<SamplePage setCart={setCart}/>} />
        <Route path="/women" element={<SamplePage setCart={setCart}/>} />
        <Route path="/contact" element={<h1 className='w-full text-3xl'>This is the contact page!</h1>} />
        <Route path="/about" element={<h1 className='w-full text-3xl'>This is the about page!</h1>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
