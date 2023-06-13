//router-dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//Provider Context App
import { AuthProvider } from "./context/authContext";

//Context - FireBase
import { onAuthStateChanged } from "firebase/auth";

//Hooks
import { useEffect, useState } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

//Style - CSS
import "./App.css";

//Components
import Navigation from "./componets/Navigation";
import Footer from "./componets/Footer";

//Pages
import ProductsCards from "./componets/products-Cards";
import ProductDescription from "./pages/ProductDescription";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import NewProducts from "./pages/NewProducts/NewProducts";
import EditPost from "./pages/EditPost/EditPost";

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user == undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<Dashboard />} />
            <Route path="/product-register" element={<NewProducts />} />
            <Route path="/product-edit/:id" element={<EditPost />} />
            <Route
              path="/product-description/:id/:name"
              element={<ProductDescription />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
