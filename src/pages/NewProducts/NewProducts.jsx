import { useState } from "react";
import { usePost } from "../../hooks/usePost";
import { useNavigate } from "react-router-dom";
import { RiErrorWarningFill } from "react-icons/ri";
import "../Login/Login.css";

const NewProducts = () => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();


  const { createPost, loading, error } = usePost();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = { name, price, description };
    createPost(product);
    alert("Cadastrado com sucesso!");
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <h1 className="title-page">Cadastre um novo produto</h1>

      <form onSubmit={handleSubmit} className="form-container">
        <label htmlFor="name" className="label-form">
          <input
            type="text"
            name="name"
            placeholder="Qual produto deseja anunciar?"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label htmlFor="price" className="label-form">
          <input
            type="number"
            name="price"
            step="0.01"
            placeholder="Quanto irá custar? R$00,00"
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
        <label htmlFor="description" className="label-form">
          <textarea
            type="text"
            name="description"
            placeholder="Escreva uma breve descrição sobre o seu produto"
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </label>
        <div className="container-btns">
          {!loading && (
            <button className="btn-submit" type="submit">
              Cadastrar
            </button>
          )}
          {loading && (
            <button className="btn-submit" disabled>
              Aguarde...
            </button>
          )}
        </div>
        {error && (
          <div className="message-error error-position">
            <span className="error-icon">{<RiErrorWarningFill />}</span>
            <span>{error}</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default NewProducts;
