import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/LandingPage/HomePage";
import FruitsNVeggiesPage from "./Pages/ProductsPage/FruitsNVeggiesPage";

function App() {
  return(
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage   />} />
      <Route path='/fruitsnveggies' element={<FruitsNVeggiesPage /> }/>
    </Routes>
    
    
    </>
  )
}

export default App;
