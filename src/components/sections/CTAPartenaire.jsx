import { Link } from "react-router-dom";
import "./CTAPartenaire.css";

function CTAPartenaire() {
  return (
    <section className="cta">
      <div className="cta__container">
        <h2 className="cta__title">Vous êtes une entreprise ou une ONG ?</h2>
        <p className="cta__subtitle">
          Rejoignez notre réseau de partenaires et proposez des offres de
          formation ou d'emploi aux talibés majeurs.
        </p>
        <Link to="/devenir-partenaire" className="cta__btn">
          🤝 Devenir partenaire
        </Link>
      </div>
    </section>
  );
}

export default CTAPartenaire;
