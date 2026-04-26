import React from "react";
import HeroSection from "./HeroSection";
import ShopByCategory from "./ShopByCategory";
import Values from "./Values";
import DiscountBanner from "../../components/DiscountBanner";
import OurProcess from "./OurProcess";
import CustomersSaying from "./CustomersSaying";
import OurPrducts from "./OurPrducts";
import { Route } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ShopByCategory />
      <Values />
      <OurPrducts />
      <DiscountBanner />
      <OurProcess />
      <CustomersSaying />
    </>
  );
};

export default HomePage;