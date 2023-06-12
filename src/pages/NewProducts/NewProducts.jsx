import { useState } from "react";
import { usePost } from "../../hooks/usePost";


const NewProducts = () => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();

  
  const { createPost } = usePost();

  const product = {name: "teste", price: 1};


  return (
    <div>
      <h1>Cadastre um novo produto</h1>
      <button onClick={() => {createPost(product)}}>testar</button>
    </div>
  );
};

export default NewProducts;
