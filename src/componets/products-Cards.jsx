// Style - CSS
import './products-Cards.css'

//set url
const url = "http://localhost:3000/products";

//Custom Hook
import { useFetch } from "../hooks/useFetch";

//GET products in the database and create a cards to show them
export default function ProductsCards() {
  //Variables API
  const { data: items, loading, error } = useFetch(url);
  console.log(items);

  return (
    <>
      {loading && <p>Aguarde o Carregamento dos dados</p>}
      {!error && (
        <div className='container-grid'>
          {items &&
            items.map((product, i) => (
              <div key={i} className="product-container">
                <h2 className="product-container-title">{product.name}</h2>
                <img src="https://placehold.co/400x400" />
                <p className='product-container-description'>{product.description}</p>
                <p className='product-container-price'>R$:{product.price}</p>
                <button className='product-container-btn'>Saiba Mais</button>
              </div>
            ))}
        </div>
      )}
      {error}
    </>
  );
}
