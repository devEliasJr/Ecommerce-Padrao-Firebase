//Hooks
import { useEffect, useState } from "react";

//Query
import { useQuery } from "../../hooks/useQuery";

//Hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  const { documents: items, loading, error } = useFetchDocuments("products", search);

  return (
    <div className="container">
      {loading && <p>Carregando...</p>}
      {!error && items && items.length > 0 ? (
        <div className="container-product-main">
          {items.map((product, i) => (
            <div key={i} className="container-product-card">
              <div className="container-product-img">
                <img src={product.image} />
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
          <p>Não foram encontrados resultados para sua busca!</p>
        </div>
      )}
    </div>
  );
};

export default Search;
