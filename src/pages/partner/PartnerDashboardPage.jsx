import { Link, useNavigate } from "react-router-dom";
import {
  Bell,
  LogOut,
  GraduationCap,
  Briefcase,
  Building2,
  ChevronRight,
  BarChart3,
  User,
} from "lucide-react";
import "./PartnerDashboardPage.css";

const offres = [
  { titre: "Boulangerie Pro", type: "Formation", statut: "En attente" },
  { titre: "Stage Tech 2024", type: "Stage", statut: "Validée" },
  { titre: "Apprenti Mécanique", type: "Emploi", statut: "Clôturée" },
  { titre: "Couture Design", type: "Formation", statut: "Validée" },
];

function PartnerDashboardPage() {
  const navigate = useNavigate();

  const getStatutClass = (statut) => {
    if (statut === "Validée") return "badge badge--green";
    if (statut === "En attente") return "badge badge--yellow";
    if (statut === "Clôturée") return "badge badge--gray";
    return "badge";
  };

  return (
    <div className="pdash">
      {/* Header */}
      <div className="pdash__header">
        <div className="pdash__header-left">
          <img
            src="/src/assets/logo.png"
            alt="TalibeVoice"
            className="pdash__logo-img"
          />
        </div>
        <div className="pdash__header-right">
          <button className="pdash__notif">
            <Bell size={20} />
          </button>
          <button
            className="pdash__logout"
            onClick={() => navigate("/partenaire/login")}
          >
            <LogOut size={20} />
          </button>
        </div>
      </div>

      <div className="pdash__content">
        {/* Card bienvenue */}
        <div className="pdash__welcome">
          <p className="pdash__welcome-label">Dashboard Partenaire</p>
          <h2 className="pdash__welcome-title">Bienvenue, Partenaire Alpha</h2>
          <p className="pdash__welcome-code">Code: DT-2024-X1</p>
        </div>

        {/* Stats */}
        <div className="pdash__stats">
          <div className="pdash__stat">
            <span className="pdash__stat-number">12</span>
            <span className="pdash__stat-label">Offres soumises</span>
          </div>
          <div className="pdash__stat">
            <span className="pdash__stat-number">45</span>
            <span className="pdash__stat-label">Talibés inscrits</span>
          </div>
          <div className="pdash__stat">
            <span className="pdash__stat-number">8</span>
            <span className="pdash__stat-label">Offres validées</span>
          </div>
        </div>

        {/* Actions rapides */}
        <div className="pdash__actions">
          <h3 className="pdash__section-title">Actions rapides</h3>
          <div className="pdash__action-list">
            <Link
              to="/partenaire/soumettre-offre"
              className="pdash__action-btn"
            >
              <div className="pdash__action-left">
                <GraduationCap size={20} />
                <span>Soumettre offre de formation</span>
              </div>
              <ChevronRight size={18} />
            </Link>
            <Link
              to="/partenaire/soumettre-offre"
              className="pdash__action-btn"
            >
              <div className="pdash__action-left">
                <Briefcase size={20} />
                <span>Soumettre offre de stage</span>
              </div>
              <ChevronRight size={18} />
            </Link>
            <Link
              to="/partenaire/soumettre-offre"
              className="pdash__action-btn"
            >
              <div className="pdash__action-left">
                <Building2 size={20} />
                <span>Soumettre offre d'emploi</span>
              </div>
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>

        {/* Mes offres */}
        <div className="pdash__offres">
          <div className="pdash__offres-header">
            <h3 className="pdash__section-title">Mes offres</h3>
            <Link to="/partenaire/talibe-inscrits" className="pdash__voir-tout">
              Voir tout
            </Link>
          </div>
          <table className="pdash__table">
            <thead>
              <tr>
                <th>Titre</th>
                <th>Type</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              {offres.map((offre, index) => (
                <tr key={index}>
                  <td>{offre.titre}</td>
                  <td>{offre.type}</td>
                  <td>
                    <span className={getStatutClass(offre.statut)}>
                      {offre.statut}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Impact communautaire */}
        <div className="pdash__impact">
          <h3 className="pdash__impact-title">Impact Communautaire</h3>
          <p className="pdash__impact-text">
            Merci pour votre engagement constant. Vos offres transforment
            l'avenir de nos talibés.
          </p>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="pdash__bottom-nav">
        <button className="pdash__nav-btn active">
          <Building2 size={20} />
          <span>Accueil</span>
        </button>
        <Link to="/partenaire/soumettre-offre" className="pdash__nav-btn">
          <Briefcase size={20} />
          <span>Offres</span>
        </Link>
        <button className="pdash__nav-btn">
          <BarChart3 size={20} />
          <span>Impact</span>
        </button>
        <button className="pdash__nav-btn">
          <User size={20} />
          <span>Profil</span>
        </button>
      </div>
    </div>
  );
}

export default PartnerDashboardPage;
