import { useState, useEffect } from "react";

export const useFetch = (url) => {
  // Warning: Imports inside the function/
  //Basic states for GET data
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //Basic States states for POST to data
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);


  // GET data from API
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

  }, [url, callFetch]);


// POST product to API/DB

//Model the JSON file

const httpConfig = (data, method) => {

  if (method === "POST") {
      setConfig({
          method,
          headers: {
              "Content-Type":"application/json"
          },
          body: JSON.stringify(data)

      });

      setMethod(method);

  }

}

  //Send data for API/DB (POST)
  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);

        const json = await res.json();

        setCallFetch(json);
      }
    };
    httpRequest();
  }, [config, method, url]);

  return { data, error, loading, httpConfig };
};






