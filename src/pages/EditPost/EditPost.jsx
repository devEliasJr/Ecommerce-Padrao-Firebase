import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiFetch from "../../axios/config";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  const fetchApi = async () => {
    setLoading(true);
    try {
      const response = await apiFetch.get(`${id}`);
      const data = response.data;

      setName(data.name);
      setPrice(data.price);
      setDescription(data.description);
    } catch (error) {
      setError(<p>Dados não encontrados, tente novamente mais tarde!</p>);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const updatePost = async (e) => {
    try {
      e.preventDefault();

      const post = {name, price, description}
      await apiFetch.put(`/${id}`, post);

      alert("Atualizado com sucesso");
      navigate('/about')

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Edite um produto</h1>

      <form
        onSubmit={(e) => {
          updatePost(e);
        }}
      >
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            placeholder="Digite o nome do produto"
            onChange={(e) => setName(e.target.value)}
            value={name || ""}
            required
          />
        </label>
        <label htmlFor="price">
          <input
            type="number"
            name="price"
            placeholder="Digite o preço do produto"
            onChange={(e) => setPrice(e.target.value)}
            value={price || ""}
            required
          />
        </label>
        <label htmlFor="description">
          <textarea
            type="text"
            name="description"
            placeholder="Digite a descrição do produto"
            onChange={(e) => setDescription(e.target.value)}
            value={description || ""}
            required
          ></textarea>
        </label>
        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  );
};

export default EditPost;
