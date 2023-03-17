import React from 'react'
import ImageSlider from './ImageSlider'
import Navbar from './Navbar'
import ProductDescription from './ProductDescription'


export default function Home() {
  return (
    <div>
      <Navbar />
      <ImageSlider />
      <ProductDescription />      
    </div>
  )
}
