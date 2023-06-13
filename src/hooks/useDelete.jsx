import { useNavigate } from "react-router-dom";
import apiFetch from "../axios/config";
import { render } from "react-dom";

export const useDelete = () => {
  const navigate = useNavigate();

  const deletePost = async (id) => {
    try {
      await apiFetch.delete(`/${id}`);
      alert('Deletado com sucesso')
    } catch (error) {
      console.log(error);
    }
  };

  return { deletePost };
};