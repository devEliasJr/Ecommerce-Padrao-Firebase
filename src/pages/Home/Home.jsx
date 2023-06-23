// Router Dom
import { Link } from "react-router-dom";

// Style - CSS
import "./Home.css";
import "../../../global_styles/global.sass";

//Set url
const url = "http://localhost:3000/products";

//Custom Hook - GET Axios
import { useGet } from "../../hooks/useGet";

//GET products in the database and create a cards to show them
export default function Home() {
  //Variables API - Fetch Axios
  const { datas: items, error, loading } = useGet();

  return (
    <div className="container">
      {loading && <p>Carregando...</p>}
      {!error & (items.length > 0) ? (
        <div className="container-product-main">
          {items.map((product, i) => (
            <div key={i} className="container-product-card">
              <div className="container-product-img">
                <img src="https://placehold.co/400x400" />
              </div>

              <div className="container-body">
                <span className="container-body-name">{product.name}</span>
                <span className="container-body-price">{`R$ ${product.price}`}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
