import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiErrorWarningFill } from "react-icons/ri";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { useAuthValue } from "../../context/AuthContext";

const NewProducts = () => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState("");
  const [description, setDescription] = useState();
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();

  const { insertDocument, loading, error } = useInsertDocument("products");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");
    console.log("ok");

    // validate image
    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
    }

    // create tags array
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    // check values
    if (!name || !image || !tags || !description) {
      setFormError("Por favor, preencha todos os campos!");
    }

    //Checar todos os valores
    if (formError) return;

    const convertedPriceToBr = parseFloat(price)
    .toFixed(2)
    .toString()
    .replace(".", ",");

    insertDocument({
      name,
      price: convertedPriceToBr,
      image,
      description,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });
    alert("Cadastrado com sucesso!");

    //redirect to home page
    navigate("/");
  };

  return (
    <div className="container">
      <h1 className="title-page">Cadastre um novo produto</h1>
      <form onSubmit={handleSubmit} className="form-container">
        {image.length > 8 && (
          <p
            style={{
              display: "Flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            Preview da imagem atual:
            <img width={"250px"} src={image} alt={name} />
          </p>
        )}
        <label htmlFor="name" className="label-form">
          <input
            type="text"
            name="name"
            placeholder="Qual produto deseja anunciar? Max.:40 caracteres."
            onChange={(e) => setName(e.target.value)}
            maxLength={40}
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
            maxLength={5}
            required
          />
        </label>
        <label htmlFor="image" className="label-form">
          <input
            type="text"
            name="image"
            placeholder="Qual é o link da sua imagem?"
            onChange={(e) => setImage(e.target.value)}
            value={image || ""}
            required
          />
        </label>
        <label htmlFor="tags" className="label-form">
          <input
            type="text"
            name="tags"
            placeholder="Separe as tags por virgula Ok!. Ex.: boné, boné aba reta"
            maxLength={60}
            onChange={(e) => setTags(e.target.value)}
            required
          />
        </label>
        <label htmlFor="description" className="label-form">
          <textarea
            type="text"
            name="description"
            placeholder="Conte-nos mais sobre os detalhes do seu produto"
            onChange={(e) => setDescription(e.target.value)}
            maxLength={300}
            required
          ></textarea>
        </label>
        <div className="container-btns">
          {!loading && (
            <button className="btn" type="submit">
              Cadastrar
            </button>
          )}
          {loading && (
            <button className="btn" disabled>
              Aguarde...
            </button>
          )}
        </div>
        {error ||
          (formError && (
            <div className="messages error">
              <span className="error-icon">{<RiErrorWarningFill />}</span>
              <span>{error || formError}</span>
            </div>
          ))}
      </form>
    </div>
  );
};

export default NewProducts;
