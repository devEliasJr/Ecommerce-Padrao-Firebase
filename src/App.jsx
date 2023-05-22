//Style - CSS
import "./App.css";

//Components
import Navigation from "./componets/Navigation";
import Footer from "./componets/Footer";
import ProductsCards from "./componets/products-Cards"
import ProductsRegister from "./componets/productsRegister";

function App() {
  return (
    <>
      <Navigation />
      <ProductsCards />
      <ProductsRegister />
      <Footer />
    </>
  );
}

export default App;
