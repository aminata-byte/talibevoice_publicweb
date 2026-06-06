import { Link } from "react-router-dom";
import { Heart, MapPin, Leaf } from "lucide-react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__container">
        {/* Colonne gauche */}
        <div className="hero__left">
          {/* Badge */}
          <div className="hero__badge">
            <Leaf size={14} />
            <span>Innovation sociale au Sénégal</span>
          </div>

          {/* Titre */}
          <h1 className="hero__title">
            Ensemble pour <br />
            l'avenir des <em>talibés.</em>
          </h1>

          {/* Sous-titre */}
          <p className="hero__subtitle">
            TalibeVoice transforme la vie des enfants des daaras grâce à une
            gestion transparente des dons et un suivi personnalisé de chaque
            parcours éducatif.
          </p>

          {/* Boutons */}
          <div className="hero__buttons">
            <Link to="/faire-un-don" className="hero__btn hero__btn--primary">
              <Heart size={18} />
              Faire un don
            </Link>
            <Link to="/daaras" className="hero__btn hero__btn--secondary">
              <MapPin size={18} />
              Découvrir nos daaras
            </Link>
          </div>
        </div>

        {/* Colonne droite */}
        <div className="hero__right">
          <img
            src="/src/assets/enfants_talibes.png"
            alt="Talibés"
            className="hero__image"
          />
          {/* Card flottante */}
          <div className="hero__card">
            <span className="hero__card-icon">📈</span>
            <div>
              <p className="hero__card-title">Progression 2024</p>
              <p className="hero__card-text">
                Augmentation de 15% de la scolarisation professionnelle ce
                trimestre.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
