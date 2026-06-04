import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Colonne 1 — Logo + description */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <span className="footer__logo-icon">🏠</span>
            <span className="footer__logo-text">TalibeVoice</span>
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
            <li>contact@talibevoice.sn</li>
            <li>+221 33 xxx xx xx</li>
            <li>Dakar, Sénégal</li>
          </ul>
        </div>
      </div>

      {/* Bas du footer */}
      <div className="footer__bottom">
        <span>© 2025 TalibeVoice — Tous droits réservés</span>
        <span>ISI — Licence 3 Génie Logiciel</span>
      </div>
    </footer>
  );
}

export default Footer;
