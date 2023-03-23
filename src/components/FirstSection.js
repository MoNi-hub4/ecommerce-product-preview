import React from 'react'
import { FirstSectionContainer } from '../styledComponents/FirstSectionStyle'
import ImageSlider from './ImageSlider'
import ProductDescription from './ProductDescription'

const FirstSection = (props) => {
  return (
    <FirstSectionContainer>
        <ImageSlider />
        <ProductDescription setCount={props.setCount} />
    </FirstSectionContainer>
        
    
  )
}

export default FirstSection