//set url
const url = "http://localhost:3000/products";

//Custom Hook
import { useFetch } from "../hooks/useFetch";

//GET products in the database and create a cards to show them

export default function Products_Cards() {
  //Variables API
  const { data: items, loading, error } = useFetch(url);
  console.log(items);

  return (
    <div>
      {loading && <p>Aguarde o Carregamento dos dados</p>}
      {!error && (
        <ul>
          {items && items.map((product, i) => 
          <li key={i}> {product.name}</li>)}
        </ul>
      )}
      {error}
    </div>
  );
}
