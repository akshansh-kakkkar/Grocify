import React from 'react'
import HeroSection from './HeroSection'
import ShopByCategory from './ShopByCategory'
import Values from './Values'
import DiscountBanner from '../../components/DiscountBanner'
import OurProcess from './OurProcess'
import CustomersSaying from './CustomersSaying'
import Footer from '../../components/Footer'

const HomePage = () => {
  return (
    <>
    <HeroSection />
    <ShopByCategory />
    <Values />
    <DiscountBanner />
    <OurProcess />
    <CustomersSaying />
    <Footer />
    </>
  )
}

export default HomePage