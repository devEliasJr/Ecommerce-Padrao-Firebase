import { useState } from "react";
import { usePost } from "../../hooks/usePost";
import { useNavigate } from "react-router-dom";


const NewProducts = () => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();

  const { createPost } = usePost();

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = { name, price, description };
    createPost(product);
    alert('Cadastrado com sucesso!')
    navigate("/about")
  };

  return (
    <div>
      <h1>Cadastre um novo produto</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            placeholder="Digite o nome do produto"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label htmlFor="price">
          <input
            type="number"
            name="price"
            placeholder="Digite o preço do produto"
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
        <label htmlFor="description">
          <textarea
            type="text"
            name="description"
            placeholder="Digite a descrição do produto"
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </label>
        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  );
};

export default NewProducts;
