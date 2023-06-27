import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";


export const useInsertDocument = (docCollection) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [inserted, setInserted] = useState()

  
  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  const checkCancel = () => {
    if (cancelled) {
      return
    }
  };

  const insertDocument = async (document) => {
    setLoading(true)
    try {
      const newDocument = { ...document, createdAt: Timestamp.now() };

      const insertedDocument = await addDoc(
        collection(db, docCollection),
        newDocument
      );

      setLoading(false)
      setInserted(true)
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  };

  

  useEffect(() => {
    return () => {
        setCancelled(true)
        setInserted('')
    };
  }, []);

  return { insertDocument, loading, error };
};
