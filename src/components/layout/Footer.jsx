import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__container">
          {/* Colonne 1 — Logo + description */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <img
                src="/src/assets/logo.jpg"
                alt="TalibeVoice"
                className="footer__logo-img"
              />
            </Link>
            <p className="footer__description">
              Plateforme numérique de recensement, de cartographie et de gestion
              des talibés et des daaras au Sénégal.
            </p>
          </div>

          {/* Colonne 2 — Navigation */}
          <div className="footer__nav">
            <h4 className="footer__title">Navigation</h4>
            <ul className="footer__links">
              <li>
                <Link to="/a-propos">À propos</Link>
              </li>
              <li>
                <Link to="/daaras">Daaras</Link>
              </li>
              <li>
                <Link to="/faire-un-don">Faire un don</Link>
              </li>
              <li>
                <Link to="/devenir-partenaire">Devenir partenaire</Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 — Contact */}
          <div className="footer__contact">
            <h4 className="footer__title">Contact</h4>
            <ul className="footer__links">
              <li>
                <Mail size={14} />
                <span>contact@talibevoice.sn</span>
              </li>
              <li>
                <Phone size={14} />
                <span>+221 33 700 70 70</span>
              </li>
              <li>
                <MapPin size={14} />
                <span>Dakar, Sénégal</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bas du footer */}
      <div className="footer__bottom">
        <div className="footer__bottom-container">
          <span>© 2025 TalibeVoice — Tous droits réservés</span>
          <div className="footer__bottom-links">
            <Link to="/confidentialite">Confidentialité</Link>
            <Link to="/conditions">Conditions</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
