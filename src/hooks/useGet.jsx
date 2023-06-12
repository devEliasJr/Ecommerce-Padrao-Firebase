import { useEffect, useState } from "react";
import apiFetch from "../axios/config";



export const useGet = () => {
  const [datas, setDatas] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)

  const fetchApi = async () => {
    setLoading(true)
    try {
      const response = await apiFetch.get("/");
      setDatas(response.data);
    } catch (error) {
      setError(<p>Dados não encontrados, tente novamente mais tarde!</p>);
    }
    setLoading(false)
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return { datas, error, loading };
};
