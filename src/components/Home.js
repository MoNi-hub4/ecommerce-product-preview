import React from 'react'
import CartMenu from './CartMenu'
import FirstSection from './FirstSection'
import Navbar from './Navbar'


export default function Home() {
  return (
    <div className='Home'>
      <Navbar />
      <CartMenu />
      <FirstSection/>
    </div>
  )
}
