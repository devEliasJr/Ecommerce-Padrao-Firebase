//router-dom
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

//Style - CSS
import "./App.css";

//Components
import Navigation from "./componets/Navigation";
import Footer from "./componets/Footer";

//Pages
import ProductsCards from "./componets/products-Cards"
import ProductsRegister from "./componets/productsRegister";
import ProductDescription from "./pages/ProductDescription";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<ProductsCards />} />
          <Route path="/product-register" element={<ProductsRegister />} />
          <Route path="/product-description/:id/:name" element={<ProductDescription />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
