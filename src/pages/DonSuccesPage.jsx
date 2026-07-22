import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { CheckCircle2, Heart } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import donService from "../services/donService";
import "./DonStatutPage.css";

function DonSuccesPage() {
  const [searchParams] = useSearchParams();
  const reference = searchParams.get("reference");
  const [don, setDon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!reference) {
      setLoading(false);
      return;
    }
    donService
      .getStatut(reference)
      .then(setDon)
      .catch(() => setError("Impossible de vérifier ce don."))
      .finally(() => setLoading(false));
  }, [reference]);

  return (
    <div>
      <Navbar />
      <div className="donstatut">
        <div className="donstatut__card">
          <CheckCircle2 size={56} color="var(--primary)" />
          <h1 className="donstatut__title">Merci pour votre don !</h1>

          {loading && <p className="donstatut__text">Vérification...</p>}

          {!loading && error && <p className="donstatut__text">{error}</p>}

          {!loading && don && (
            <>
              <p className="donstatut__text">
                {don.statut_paiement === "paye"
                  ? "Votre paiement a été confirmé avec succès. Votre don sera examiné par notre équipe avant redistribution."
                  : "Votre don a été enregistré et est en cours de traitement."}
              </p>
              <div className="donstatut__detail">
                <span>{Number(don.montant).toLocaleString()} FCFA</span>
                <span className="donstatut__sep">•</span>
                <span>
                  {don.mode_paiement === "wave" ? "Wave" : "Orange Money"}
                </span>
              </div>
            </>
          )}

          <Link to="/" className="donstatut__btn">
            <Heart size={16} />
            Retour à l'accueil
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DonSuccesPage;
