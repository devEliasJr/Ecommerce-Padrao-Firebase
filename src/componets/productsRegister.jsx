import { useState } from "react";
import "./productsRegister.css";

//Custom Hook
import { useFetch } from "../hooks/useFetch";

const url = "http://localhost:3000/products";

const ProductsRegister = () => {
  const { data: items, loading, error, httpConfig } = useFetch(url);
  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);

  // ADD de produtos (POST)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // Send set params to post
    httpConfig(product, "POST");

    //reset product states
    setName([""]);
    setPrice([""]);
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <label className="form-label">
          <span className="form-label-desc">Name</span>
          <input
            required
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label className="form-label">
          <span className="form-label-desc">Price</span>
          <input
            required
            type="number"
            name="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </label>
        <button className="btn-sbmt" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ProductsRegister;
