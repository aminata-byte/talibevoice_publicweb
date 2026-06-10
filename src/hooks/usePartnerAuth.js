import { useState, useEffect } from "react";
import partnerService from "../services/partnerService";

function usePartnerAuth() {
  const [partenaire, setPartenaire] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("partenaire");
    if (stored) {
      setPartenaire(JSON.parse(stored));
    }
  }, []);

  const login = async (code) => {
    setLoading(true);
    setError(null);
    try {
      const data = await partnerService.login(code);
      localStorage.setItem("token", data.token);
      localStorage.setItem("partenaire", JSON.stringify(data.partenaire));
      setPartenaire(data.partenaire);
      return { success: true };
    } catch (err) {
      const message =
        err.response?.data?.message || "Code partenaire invalide.";
      setError(message);
      return { success: false, message };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("partenaire");
    setPartenaire(null);
  };

  const isAuthenticated = () => {
    return !!localStorage.getItem("token");
  };

  return {
    partenaire,
    loading,
    error,
    login,
    logout,
    isAuthenticated,
  };
}

export default usePartnerAuth;
