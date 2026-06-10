import { useState } from "react";
import donService from "../services/donService";

function useDon() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submitDon = async (typeDon, donData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      if (typeDon === "financier") {
        await donService.submitFinancier(donData);
      } else {
        await donService.submitMateriel(donData);
      }
      setSuccess(true);
      return { success: true };
    } catch (err) {
      const message =
        err.response?.data?.message || "Erreur lors de la soumission du don.";
      setError(message);
      return { success: false, message };
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setError(null);
    setSuccess(false);
  };

  return {
    loading,
    error,
    success,
    submitDon,
    reset,
  };
}

export default useDon;
