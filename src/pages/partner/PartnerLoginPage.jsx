import { useState } from "react";
import { Link } from "react-router-dom";
import { KeyRound } from "lucide-react";
import { usePartnerAuthContext } from "../../context/PartnerAuthContext";
import "./PartnerLoginPage.css";

function PartnerLoginPage() {
  const [code, setCode] = useState("");
  const { loading, error } = usePartnerAuthContext();

  const handleAcceder = () => {
    if (code.trim() === "") {
      return;
    }

    localStorage.setItem("token", "temp_token");
    localStorage.setItem(
      "partenaire",
      JSON.stringify({
        id: 1,
        nom: "Partenaire Alpha",
        code_partenaire: code,
      }),
    );

    window.location.href = "/partenaire/dashboard";
  };

  return (
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
              id="code_partenaire"
              name="code_partenaire"
              type="text"
              placeholder="Entrez votre code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="plogin__input"
            />
          </div>
        </div>

        {/* Erreur */}
        {error && (
          <p
            style={{
              color: "var(--tertiary)",
              fontSize: "13px",
              textAlign: "center",
            }}
          >
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

        {/* Lien */}
        <p className="plogin__link">
          Pas encore partenaire ?{" "}
          <Link to="/devenir-partenaire">Candidater ici</Link>
        </p>
      </div>
    </div>
  );
}

export default PartnerLoginPage;
