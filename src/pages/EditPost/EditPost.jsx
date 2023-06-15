import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiFetch from "../../axios/config";
import "../Login/Login.css";

const EditPost = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  //Get product at a specific id
  //to-do: custom hook for re-use in page product
  const fetchApi = async () => {
    setLoading(true);
    try {
      const response = await apiFetch.get(`${id}`);
      const data = response.data;

      setName(data.name);
      setPrice(data.price);
      setDescription(data.description);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const updatePost = async (e) => {
    try {
      e.preventDefault();

      const post = { name, price, description };
      await apiFetch.put(`/${id}`, post);

      alert("Atualizado com sucesso");
      navigate("/about");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1 className="title-page">Edite um produto</h1>

      <form
        className="form-container"
        onSubmit={(e) => {
          updatePost(e);
        }}
      >
        <label htmlFor="name" className="label-form">
          <input
            type="text"
            name="name"
            placeholder="Digite o nome do produto"
            onChange={(e) => setName(e.target.value)}
            value={name || ""}
            required
          />
        </label>
        <label htmlFor="price" className="label-form">
          <input
            type="number"
            name="price"
            placeholder="Digite o preço do produto"
            onChange={(e) => setPrice(e.target.value)}
            value={price || ""}
            required
          />
        </label>
        <label htmlFor="description" className="label-form">
          <textarea
            type="text"
            name="description"
            placeholder="Digite a descrição do produto"
            onChange={(e) => setDescription(e.target.value)}
            value={description || ""}
            required
          ></textarea>
        </label>
        <div className="container-btns">
          {!loading && (
            <button className="btn-submit" type="submit">
              Confirmar Alterações
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

export default EditPost;
