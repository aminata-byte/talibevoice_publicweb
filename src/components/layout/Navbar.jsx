import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-icon">🏠</span>
          <span className="navbar__logo-text">TalibeVoice</span>
        </Link>

        {/* Liens de navigation */}
        <ul className="navbar__links">
          <li>
            <NavLink to="/a-propos">À propos</NavLink>
          </li>
          <li>
            <NavLink to="/daaras">Daaras</NavLink>
          </li>
          <li>
            <NavLink to="/devenir-partenaire" className="navbar__link--green">
              Devenir partenaire
            </NavLink>
          </li>
          <li>
            <NavLink to="/partenaire/login" className="navbar__link--green">
              Espace partenaire
            </NavLink>
          </li>
        </ul>

        {/* Bouton CTA */}
        <Link to="/faire-un-don" className="navbar__cta">
          Faire un don
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
