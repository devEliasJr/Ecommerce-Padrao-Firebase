import { useState } from "react";
import apiFetch from "../axios/config";


export const usePost = () => {
  const [loading, setLoading] = useState()
  const [error, setError] = useState()

  const createPost = async (product) => {
    setLoading(true)
    try {
      await apiFetch.post("/", product);
      setLoading(false)
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  };

  return { createPost, loading, error };
};
