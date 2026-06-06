import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <img
            src="/src/assets/logo.jpg"
            alt="TalibeVoice"
            className="navbar__logo-img"
          />
        </Link>

        {/* Liens de navigation */}
        <ul className="navbar__links">
          <li>
            <a href="#impact">Impact</a>
          </li>
          <li>
            <a href="#processus">Processus</a>
          </li>
          <li>
            <a href="#partenaires">Partenaires</a>
          </li>
          <li>
            <a href="#temoignages">Témoignages</a>
          </li>
        </ul>

        {/* Boutons droite */}
        <div className="navbar__actions">
          <Link to="/devenir-partenaire" className="navbar__btn-partner">
            Devenir partenaire
          </Link>
          <Link to="/faire-un-don" className="navbar__cta">
            Faire un don
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
