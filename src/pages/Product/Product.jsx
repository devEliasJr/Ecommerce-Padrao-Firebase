import React from "react";
import { useParams } from "react-router-dom";
import { useFetchProduct } from "../../hooks/useFetchProduct";

const Product = () => {
  const { id } = useParams();
  const { document: product, loading, error } = useFetchProduct("products", id);

  return (
    <div className="container">
      <h2 className="title-page">Página do Produto</h2>
      <div className="card">
        <ul>
          {product && (
            <div className="container-product-card">
              <div className="container-product-img">
                <img src={product.image} />
              </div>
              <div className="container-body">
                <span className="container-body-name">{product.name}</span>
                <span className="container-body-price">{`R$ ${product.price}`}</span>
              </div>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Product;
