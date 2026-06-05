import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./PartnerLoginPage.css";

function PartnerLoginPage() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleAcceder = () => {
    if (code.trim() === "") {
      alert("Veuillez entrer votre code partenaire.");
      return;
    }
    navigate("/partenaire/dashboard");
  };

  return (
    <div className="plogin">
      <div className="plogin__card">
        {/* Logo */}
        <div className="plogin__logo">
          <span className="plogin__logo-icon">🏠</span>
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
            <span className="plogin__input-icon">🔑</span>
            <input
              type="text"
              placeholder="Entrez votre code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="plogin__input"
            />
          </div>
        </div>

        {/* Bouton */}
        <button className="plogin__btn" onClick={handleAcceder}>
          Accéder
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
