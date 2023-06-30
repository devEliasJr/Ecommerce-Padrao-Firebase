// Router Dom
import { Link } from "react-router-dom";

// Style - CSS
import "./Home.sass";
import "../../../global_styles/global.sass";

//Set url
const url = "http://localhost:3000/products";

//Custom Hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

//Components
import Carrousel from "../../componets/Carrousel"

//GET products in the database and create a cards to show them
export default function Home() {
  //Variables API - Fetch Axios
  // const { datas: items, error, loading } = useGet();
  const { documents: items, loading, error } = useFetchDocuments("products");

  return (
    <div className="container">
      <Carrousel />
      {loading && <p>Carregando...</p>}
      {!error && items && items.length > 0 ? (
        <div className="container-product-main">
          {items.map((product, i) => (
            <div key={i} className="container-product-card">
              <Link to={`/product/${product.id}`}>
                <div className="container-product-img">
                  <img src={product.image} />
                </div>
                <div className="container-body">
                  <span className="container-body-name">{product.name}</span>
                  <span className="container-body-price">{`R$ ${product.price}`}</span>
                </div>
              </Link>
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
