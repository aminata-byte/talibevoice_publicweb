import { createContext, useContext, useState, useEffect } from "react";
import partnerService from "../services/partnerService";

const PartnerAuthContext = createContext(null);

export function PartnerAuthProvider({ children }) {
  const [partenaire, setPartenaire] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("partenaire");
    const token = localStorage.getItem("token");
    if (stored && token) {
      setPartenaire(JSON.parse(stored));
    }
    setLoading(false);
  }, []);

  const login = async (code) => {
    try {
      const data = await partnerService.login(code);
      localStorage.setItem("token", data.token);
      localStorage.setItem("partenaire", JSON.stringify(data.partenaire));
      setPartenaire(data.partenaire);
      return { success: true };
    } catch (err) {
      const message =
        err.response?.data?.message || "Code partenaire invalide.";
      return { success: false, message };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("partenaire");
    setPartenaire(null);
  };

  const isAuthenticated = () => {
    return !!partenaire && !!localStorage.getItem("token");
  };

  return (
    <PartnerAuthContext.Provider
      value={{
        partenaire,
        loading,
        login,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </PartnerAuthContext.Provider>
  );
}

export function usePartnerAuthContext() {
  const context = useContext(PartnerAuthContext);
  if (!context) {
    throw new Error(
      "usePartnerAuthContext doit être utilisé dans PartnerAuthProvider",
    );
  }
  return context;
}

export default PartnerAuthContext;
