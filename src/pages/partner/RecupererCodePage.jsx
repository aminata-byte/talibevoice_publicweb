import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, KeyRound, ArrowLeft } from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import api from "../../services/api";
import "./RecupererCodePage.css";

function RecupererCodePage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const handleRecuperer = async () => {
    if (!email) {
      setError("Veuillez saisir votre email.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await api.post("/partenaires/recuperer-code", { email });
      setResult(res.data);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Aucun partenaire validé trouvé avec cet email.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="recuperer-page">
      <div className="recuperer-card">
        <Link to="/partenaire/login" className="recuperer-back">
          <ArrowLeft size={16} />
          Retour à la connexion
        </Link>

        <div className="recuperer-icon">
          <KeyRound size={32} color="var(--primary)" />
        </div>

        <h1 className="recuperer-title">Récupérer mon code</h1>
        <p className="recuperer-subtitle">
          Saisissez l'email avec lequel vous avez soumis votre candidature.
        </p>

        {!result ? (
          <>
            <div className="recuperer-field">
              <label>Adresse email</label>
              <div className="recuperer-input-wrapper">
                <Mail size={16} />
                <input
                  type="email"
                  placeholder="Entrez votre email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleRecuperer()}
                />
              </div>
            </div>

            {error && <p className="recuperer-error">{error}</p>}

            <button
              className="recuperer-btn"
              onClick={handleRecuperer}
              disabled={loading}
            >
              {loading ? "Recherche..." : "Récupérer mon code"}
            </button>
          </>
        ) : (
          <div className="recuperer-result">
            <p className="recuperer-result-nom">
              Bienvenue, <strong>{result.nom}</strong>
            </p>
            <div className="recuperer-code-box">
              <p className="recuperer-code-label">Votre code partenaire</p>
              <p className="recuperer-code">{result.code_partenaire}</p>
            </div>
            <button
              className="recuperer-copy-btn"
              onClick={() => {
                navigator.clipboard.writeText(result.code_partenaire);
                alert("Code copié !");
              }}
            >
              Copier le code
            </button>
            <Link
              to="/partenaire/login"
              className="recuperer-btn"
              style={{
                textAlign: "center",
                textDecoration: "none",
                display: "block",
              }}
            >
              Se connecter maintenant
            </Link>
          </div>
        )}
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default RecupererCodePage;
