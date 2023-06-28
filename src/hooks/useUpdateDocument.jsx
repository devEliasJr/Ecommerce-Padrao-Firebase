import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";

export const useUpdate = (docCollection) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  const checkCancel = () => {
    if (cancelled) {
      return;
    }
  };

  const updateProduct = async (id, data) => {
    setLoading(true);

    try {
      await updateDoc(doc(db, docCollection, id), data);
      setLoading(false);
      setInserted(true);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      setCancelled(true);
    };
  }, []);

  return { updateProduct, loading, error };
};
