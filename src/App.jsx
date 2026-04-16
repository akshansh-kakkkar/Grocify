import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/LandingPage/HomePage";
import FruitsNVeggiesPage from "./Pages/ProductsPage/FruitsNVeggiesPage";
import MeatNSeaFoodPage from "./Pages/ProductsPage/MeatNSeaFoodPage";
import MilknEggsPage from "./Pages/ProductsPage/MilknEggsPage";
import Footer from './components/Footer'
import ScrollToTop from "./scroll/ScrollToTop";
import AllProducts from "./Pages/ProductsPage/AllProducts";
function App() {
  return(
    <>
    <Navbar />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<HomePage   />} />
      <Route path='/fruitsnveggies' element={<FruitsNVeggiesPage /> }/>
      <Route path='/meatnseafood' element={<MeatNSeaFoodPage/>}/>
      <Route path="/dairyneggs" element={<MilknEggsPage />} />
      <Route path="/all-products" element={<AllProducts/>}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App;
