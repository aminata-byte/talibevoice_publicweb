import { XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./DonStatutPage.css";

function DonEchecPage() {
  return (
    <div>
      <Navbar />
      <div className="donstatut">
        <div className="donstatut__card">
          <XCircle size={56} color="var(--tertiary)" />
          <h1 className="donstatut__title">Paiement annulé</h1>
          <p className="donstatut__text">
            Le paiement n'a pas été finalisé. Aucun montant n'a été prélevé.
          </p>
          <Link to="/faire-un-don" className="donstatut__btn">
            Réessayer
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DonEchecPage;
