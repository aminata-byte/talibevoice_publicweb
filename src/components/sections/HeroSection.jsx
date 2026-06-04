import { Link } from "react-router-dom";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__container">
        {/* Badge */}
        <div className="hero__badge">
          <span className="hero__badge-flag">🇸🇳</span>
          <span>Plateforme nationale — Sénégal</span>
        </div>

        {/* Titre */}
        <h1 className="hero__title">
          Ensemble pour les talibés <br /> du Sénégal
        </h1>

        {/* Sous-titre */}
        <p className="hero__subtitle">
          Une plateforme numérique pour recenser, cartographier et accompagner
          les talibés et les daaras à travers tout le territoire sénégalais.
        </p>

        {/* Boutons */}
        <div className="hero__buttons">
          <Link to="/faire-un-don" className="hero__btn hero__btn--primary">
            Faire un don
          </Link>
          <Link to="/daaras" className="hero__btn hero__btn--secondary">
            Explorer les daaras
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
