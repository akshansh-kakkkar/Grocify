import React from 'react'
import HeroSection from './HeroSection'
import ShopByCategory from './ShopByCategory'
import Values from './Values'
import DiscountBanner from '../../components/DiscountBanner'

const HomePage = () => {
  return (
    <>
    <HeroSection />
    <ShopByCategory />
    <Values />
    <DiscountBanner />
    </>
  )
}

export default HomePage