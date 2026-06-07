import { useNavigate, Link } from "react-router-dom";
import {
  Home,
  Briefcase,
  BarChart3,
  User,
  TrendingUp,
  Users,
  GraduationCap,
} from "lucide-react";
import "./PartnerImpactPage.css";

function PartnerImpactPage() {
  const navigate = useNavigate();

  const stats = [
    { icon: <Users size={24} />, number: "45", label: "Talibés inscrits" },
    {
      icon: <GraduationCap size={24} />,
      number: "12",
      label: "Offres soumises",
    },
    {
      icon: <TrendingUp size={24} />,
      number: "8",
      label: "Insertions validées",
    },
  ];

  const historique = [
    { mois: "Janvier 2024", inscrits: 8, valides: 5 },
    { mois: "Février 2024", inscrits: 12, valides: 9 },
    { mois: "Mars 2024", inscrits: 10, valides: 7 },
    { mois: "Avril 2024", inscrits: 15, valides: 11 },
  ];

  return (
    <div className="pimpact">
      {/* Header */}
      <div className="pimpact__header">
        <div className="pimpact__header-left">
          <img
            src="/src/assets/logo.jpg"
            alt="TalibeVoice"
            className="pimpact__logo-img"
          />
        </div>
        <button
          className="pimpact__logout"
          onClick={() => navigate("/partenaire/login")}
        >
          Impact
        </button>
      </div>

      <div className="pimpact__content">
        {/* Titre */}
        <div className="pimpact__hero">
          <h1 className="pimpact__title">Votre Impact</h1>
          <p className="pimpact__subtitle">
            Suivez l'évolution de votre contribution à l'insertion des talibés.
          </p>
        </div>

        {/* Stats */}
        <div className="pimpact__stats">
          {stats.map((stat, index) => (
            <div key={index} className="pimpact__stat">
              <div className="pimpact__stat-icon">{stat.icon}</div>
              <span className="pimpact__stat-number">{stat.number}</span>
              <span className="pimpact__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Historique */}
        <div className="pimpact__historique">
          <h2 className="pimpact__section-title">Historique mensuel</h2>
          <table className="pimpact__table">
            <thead>
              <tr>
                <th>Mois</th>
                <th>Talibés inscrits</th>
                <th>Insertions validées</th>
              </tr>
            </thead>
            <tbody>
              {historique.map((h, index) => (
                <tr key={index}>
                  <td>{h.mois}</td>
                  <td>{h.inscrits}</td>
                  <td>{h.valides}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Message */}
        <div className="pimpact__message">
          <TrendingUp size={24} />
          <div>
            <h3 className="pimpact__message-title">
              Continuez votre engagement !
            </h3>
            <p className="pimpact__message-text">
              Votre participation transforme concrètement la vie des talibés au
              Sénégal.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="pimpact__bottom-nav">
        <button
          className="pimpact__nav-btn"
          onClick={() => navigate("/partenaire/dashboard")}
        >
          <Home size={20} />
          <span>Accueil</span>
        </button>
        <Link to="/partenaire/soumettre-offre" className="pimpact__nav-btn">
          <Briefcase size={20} />
          <span>Offres</span>
        </Link>
        <button className="pimpact__nav-btn active">
          <BarChart3 size={20} />
          <span>Impact</span>
        </button>
        <button
          className="pimpact__nav-btn"
          onClick={() => navigate("/partenaire/profil")}
        >
          <User size={20} />
          <span>Profil</span>
        </button>
      </div>
    </div>
  );
}

export default PartnerImpactPage;
