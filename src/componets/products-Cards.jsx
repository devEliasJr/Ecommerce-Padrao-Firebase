// Router Dom
import { Link } from "react-router-dom";

// Style - CSS
import "./products-Cards.css";

//Set url
const url = "http://localhost:3000/products";

//Custom Hook - GET Axios
import { useGet } from '../hooks/useGet'

//GET products in the database and create a cards to show them
export default function Home() {
  //Variables API - Fetch Axios
  const { datas: items, error, loading } = useGet();
  console.log(items);
  console.log(loading);

  return (
    <>
      {loading && <p>Carregando...</p>}
      {!error & (items.length > 0) ? (
        <div className="container-grid">
          {items.map((product, i) => (
            <div key={i} className="product-container">
              <h2 className="product-container-title">{product.name}</h2>
              <img src="https://placehold.co/400x400" />
              <p className="product-container-description">
                {product.description}
              </p>
              <p className="product-container-price">R$:{product.price}</p>
              <Link
                className="product-container-btn"
                to={`/product-description/${product.id}/${product.name}`}
              >
                <span className="product-container-btn-txt">
                  Saiba Mais ...
                </span>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>{error}</p>
        </div>
      )}
    </>
  );
}
