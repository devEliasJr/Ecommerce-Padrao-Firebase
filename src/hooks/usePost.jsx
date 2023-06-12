import apiFetch from "../axios/config";

export const usePost = () => {
  const createPost = async (product) => {
    try {
      await apiFetch.post("/", product);
    } catch (error) {
      console.log(error);
    }
  };

  return { createPost };
};
