import React from 'react'
import { FirstSectionContainer } from '../styledComponents/FirstSectionStyle'
import ImageSlider from './ImageSlider'
import ProductDescription from './ProductDescription'

const FirstSection = () => {
  return (
    <FirstSectionContainer>
        <ImageSlider />
        <ProductDescription />
    </FirstSectionContainer>
        
    
  )
}

export default FirstSection