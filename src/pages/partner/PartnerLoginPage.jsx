import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { KeyRound } from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import api from "../../services/api";
import "./PartnerLoginPage.css";

function PartnerLoginPage() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleAcceder = async () => {
    if (code.trim() === "") {
      setError("Veuillez entrer votre code partenaire.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await api.post("/partenaires/login", {
        code_partenaire: code,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("partenaire", JSON.stringify(res.data.partenaire));
      navigate("/partenaire/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Code partenaire invalide ou compte non validé.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="plogin">
      <div className="plogin__card">
        {/* Logo */}
        <div className="plogin__logo">
          <img
            src="/src/assets/logo.jpg"
            alt="TalibeVoice"
            className="plogin__logo-img"
          />
        </div>

        {/* Titre */}
        <h1 className="plogin__title">Espace Partenaire</h1>
        <p className="plogin__subtitle">
          Veuillez vous authentifier pour continuer
        </p>

        {/* Champ code */}
        <div className="plogin__form-group">
          <label className="plogin__label">Code partenaire</label>
          <div className="plogin__input-wrapper">
            <KeyRound size={16} className="plogin__input-icon" />
            <input
              type="text"
              placeholder="Entrez votre code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAcceder()}
              className="plogin__input"
            />
          </div>
        </div>

        {error && (
          <p className="plogin__link" style={{ color: "var(--tertiary)" }}>
            {error}
          </p>
        )}

        {/* Bouton */}
        <button
          className="plogin__btn"
          onClick={handleAcceder}
          disabled={loading}
        >
          {loading ? "Connexion..." : "Accéder"}
        </button>

        {/* Lien code oublié */}
        <p className="plogin__link">
          <Link to="/partenaire/recuperer-code">Récupérer mon code</Link>
        </p>

        {/* Lien */}
        <p className="plogin__link">
          Pas encore partenaire ?{" "}
          <Link to="/devenir-partenaire">Candidater ici</Link>
        </p>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default PartnerLoginPage;
