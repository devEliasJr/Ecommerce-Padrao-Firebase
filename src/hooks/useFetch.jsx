import { useState, useEffect } from "react";

export const useFetch = (url) => {
  // Warning: Imports inside the function/
  //Basic states for GET data
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {

      try {
        const r = await fetch(url);
        const json = await r.json();
        setData(json);

      } catch (error) {
        setError("Dados não encontrados, tente novamente mais tarde!");

      }
      setLoading(false);

    };

    fetchData()

  }, [url]);

  return { data, error, loading };
};

