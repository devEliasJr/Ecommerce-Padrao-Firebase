import { useEffect, useState } from "react";
import apiFetch from "../axios/config";

export const usePost = () => {
  const [name, setName] = useState()
  const [price, setPrice] = useState()


  const product = {
    id,
    name,
    price
  }

  const postProduct = async () => {
    const response = await apiFetch.post("/", product);

    setData(response)
  };
  return {};
};
