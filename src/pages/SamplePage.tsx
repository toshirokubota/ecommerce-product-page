import { useState } from 'react'
import '../App.css'
//import Header from '../components/Header'
import ImageSlider from '../components/ImageSlider'
import ProductCard from '../components/ProductCard'
import ProductPrice from '../components/ProductPrice'
import IncDecButton from '../components/IncDecButton'
import AddToCart from '../components/AddToCart'
import type { CartItemType, ProductType } from '../types'
import ThumbnailCard from '../components/ThumbnailCard'
import LeftShifter from '../components/LeftShifter'
import RightShifter from '../components/RightShifter'
import Lightbox from '../components/Lightbox'

export default function SamplePage({setCart}:
    {setCart: React.Dispatch<React.SetStateAction<CartItemType[]>>}
) {
  const [count, setCount] = useState<number>(0);
  const [imageViewWidth, setImageViewWidth] = useState(0);
  const [shiftAmount, setShiftAmount] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

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
  const leftShift= () => {
    if(shiftAmount > 0) {
      setShiftAmount(prev => prev - 1);
    }
  }
  const rightShift = () => {
  const numImages = product.images.length;
    if(shiftAmount < numImages - 1) {
      setShiftAmount(prev => prev + 1);
    }
  }
  const handlers = [];
  for(let i=0; i<product.thumnails.length; ++i) {
    handlers.push(()=>{setShiftAmount(i)});
  }

  return (
    <>
      <div inert={showLightbox} className='main-container'>
        <section className='image-section'>
          <div className='relative'>
            <LeftShifter shift={leftShift}/>
            <ImageSlider 
              imageNames={product.images} 
              shift={shiftAmount} 
              imageWidth={imageViewWidth} 
              setImageWidth={setImageViewWidth}
              showLightbox={setShowLightbox}/>
            <RightShifter shift={rightShift}/>
          </div>
          <ThumbnailCard imageNames={product.thumnails} handlers={handlers} />
        </section>
        <section className='text-section'>
          <ProductCard company={product.company} name={product.name} description={product.description} />
          <ProductPrice price={product.price} discount={product.discount} />
          <div className='shop-buttons flex flex-col'>
            <IncDecButton count={count} setCount={setCount}/>
            <AddToCart count={count} product={product} setCart={setCart} setCount={setCount}/>
          </div>
        </section>
        </div>
        {showLightbox && <Lightbox product={product} show={setShowLightbox}/>}
    </>
  )
}


