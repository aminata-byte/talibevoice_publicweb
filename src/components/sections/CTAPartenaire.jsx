import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import "./CTAPartenaire.css";

function CTAPartenaire() {
  const avantages = [
    "Défiscalisation de vos dons (selon législation)",
    "Rapports d'impact semestriels personnalisés",
    "Visibilité sur nos supports de communication",
  ];

  return (
    <section className="ctapart">
      <div className="ctapart__container">
        {/* Colonne gauche */}
        <div className="ctapart__left">
          <h2 className="ctapart__title">Entreprises & ONG</h2>
          <p className="ctapart__subtitle">
            Associez l'image de votre institution à un projet structurant pour
            la société sénégalaise et bénéficiez d'avantages exclusifs.
          </p>
          <ul className="ctapart__avantages">
            {avantages.map((a, index) => (
              <li key={index} className="ctapart__avantage">
                <CheckCircle2 size={18} />
                <span>{a}</span>
              </li>
            ))}
          </ul>
          <Link to="/devenir-partenaire" className="ctapart__btn">
            Devenir partenaire
          </Link>
        </div>

        {/* Colonne droite */}
        <div className="ctapart__right">
          <img
            src="/src/assets/image_partenaire.png"
            alt="Partenaires"
            className="ctapart__image"
          />
        </div>
      </div>
    </section>
  );
}

export default CTAPartenaire;
