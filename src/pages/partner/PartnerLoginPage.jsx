import { useState } from "react";
import { Link } from "react-router-dom";
import { KeyRound } from "lucide-react";
import "./PartnerLoginPage.css";

function PartnerLoginPage() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAcceder = async () => {
    if (code.trim() === "") {
      setError("Veuillez entrer votre code partenaire.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "http://localhost:8000/api/partenaires/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code_partenaire: code }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Code partenaire invalide.");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("partenaire", JSON.stringify(data.partenaire));
      window.location.href = "/partenaire/dashboard";
    } catch (err) {
      setError("Erreur de connexion. Vérifiez que le serveur est démarré.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="plogin">
      <div className="plogin__card">
        <div className="plogin__logo">
          <img
            src="/src/assets/logo.jpg"
            alt="TalibeVoice"
            className="plogin__logo-img"
          />
        </div>

        <h1 className="plogin__title">Espace Partenaire</h1>
        <p className="plogin__subtitle">
          Veuillez vous authentifier pour continuer
        </p>

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
              onKeyDown={(e) => e.key === "Enter" && handleAcceder()}
              className="plogin__input"
            />
          </div>
        </div>

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

        <button
          className="plogin__btn"
          onClick={handleAcceder}
          disabled={loading}
        >
          {loading ? "Connexion..." : "Accéder"}
        </button>

        <p className="plogin__link">
          Pas encore partenaire ?{" "}
          <Link to="/devenir-partenaire">Candidater ici</Link>
        </p>
      </div>
    </div>
  );
}

export default PartnerLoginPage;
