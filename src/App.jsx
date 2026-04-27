import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/LandingPage/HomePage";
import FruitsNVeggiesPage from "./Pages/ProductsPage/FruitsNVeggiesPage";
import MeatNSeaFoodPage from "./Pages/ProductsPage/MeatNSeaFoodPage";
import MilknEggsPage from "./Pages/ProductsPage/MilknEggsPage";
import Footer from "./components/Footer";
import ScrollToTop from "./scroll/ScrollToTop";
import AllProducts from "./Pages/ProductsPage/AllProducts";
import FavoritesPage from "./Pages/ProductsPage/FavoritesPage";
import { Cart } from "./Pages/CartPage/Cart";
import Payment from "./Pages/CartPage/Payment";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import { time } from "framer-motion";
import { ToastContainer } from "react-toastify";
function App() {
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation();
  useEffect(()=>{
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500);
    return ()=>clearTimeout(timer)
  }, [location])
  return (
    <>
    
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={isLoading && <Loading />} />
        <Route path="/fruitsnveggies" element={<FruitsNVeggiesPage />} />
        <Route path="/meatnseafood" element={<MeatNSeaFoodPage />} />
        <Route path="/dairyneggs" element={<MilknEggsPage />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment-gateway" element={<Payment />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
