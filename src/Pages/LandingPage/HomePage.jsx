import React from "react";
import HeroSection from "./HeroSection";
import ShopByCategory from "./ShopByCategory";
import Values from "./Values";
import DiscountBanner from "../../components/DiscountBanner";
import OurProcess from "./OurProcess";
import CustomersSaying from "./CustomersSaying";
import OurPrducts from "./OurPrducts";
import { Route, Routes } from "react-router-dom";

const HomePage = () => {
  return (
  <>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/category" element={<ShopByCategory />} />
        <Route path="/values" element={<Values />} />
        <Route path="products" element={<OurPrducts />} />
        <Route path="discountbanner" element={<DiscountBanner />} />
        <Route path="processes" element={<OurProcess />} />
        <Route path="customerssaying" element={<CustomersSaying />} />
      </Routes>
    </>
  );
};

export default HomePage;
