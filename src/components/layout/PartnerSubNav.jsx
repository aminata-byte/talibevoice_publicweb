import { NavLink, useNavigate } from "react-router-dom";
import { LayoutDashboard, Briefcase, Users, BarChart3, User, LogOut } from "lucide-react";
import "./PartnerSubNav.css";

const links = [
  { to: "/partenaire/dashboard", label: "Tableau de bord", icon: LayoutDashboard },
  { to: "/partenaire/soumettre-offre", label: "Soumettre une offre", icon: Briefcase },
  { to: "/partenaire/talibe-inscrits", label: "Talibés inscrits", icon: Users },
  { to: "/partenaire/impact", label: "Impact", icon: BarChart3 },
  { to: "/partenaire/profil", label: "Profil", icon: User },
];

function PartnerSubNav() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("partenaire");
    navigate("/partenaire/login");
  };

  return (
    <div className="psubnav">
      <div className="psubnav__container">
        <nav className="psubnav__links">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `psubnav__link ${isActive ? "psubnav__link--active" : ""}`
              }
            >
              <Icon size={16} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
        <button className="psubnav__logout" onClick={handleLogout}>
          <LogOut size={16} />
          <span>Déconnexion</span>
        </button>
      </div>
    </div>
  );
}

export default PartnerSubNav;
