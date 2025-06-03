import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ImageSlider from './components/ImageSlider'
import ProductCard from './components/ProductCard'
import ProductPrice from './components/ProductPrice'
import IncDecButton from './components/IncDecButton'
import AddToCart from './components/AddToCart'
import type { CartItemType, ProductType } from './types'
import Cart from './components/Cart'
import ThumbnailCard from './components/ThumbnailCard'

function App() {
  const [count, setCount] = useState<number>(0);
  const [cart, setCart] = useState<CartItemType[]>([]);

  const product: ProductType = {
    id: 1,
    company: 'sneaker company',
    name: 'Fall Limited Edition Sneakers',
    description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    price: 250.0,
    discount: 0.5,
    images: [
    '/images/image-product-1.jpg', '/images/image-product-2.jpg', 
    '/images/image-product-3.jpg', '/images/image-product-4.jpg'
    ],
    thumnails: [
    '/images/image-product-1-thumbnail.jpg', '/images/image-product-2-thumbnail.jpg', 
    '/images/image-product-3-thumbnail.jpg', '/images/image-product-4-thumbnail.jpg'
    ]
  }
  const handlers = [];
  for(let i=0; i<product.thumnails.length; ++i) {
    handlers.push(()=>{console.log(product.thumnails[i])});
  }

  return (
    <>
      <Header items={cart}/>
      <ImageSlider imageNames={product.images} />
      <ProductCard company={product.company} name={product.name} description={product.description} />
      <ProductPrice price={product.price} discount={product.discount} />
      <IncDecButton count={count} setCount={setCount}/>
      <AddToCart count={count} product={product} setCart={setCart} setCount={setCount}/>
      <Cart items={cart} setCart={setCart}/>
      <ThumbnailCard imageNames={product.thumnails} handlers={handlers} />
    </>
  )
}

export default App
