import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

export const useDeleteDocument = (docCollection) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [deleted, setDeleted] = useState();

  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  const checkCancel = () => {
    if (cancelled) {
      return;
    }
  };

  const deleteDocument = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(db, docCollection, id));

      setLoading(false);
      setDeleted(true);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      setCancelled(true);
      setDeleted("");
    };
  }, []);

  return { deleteDocument, loading, error };
};
