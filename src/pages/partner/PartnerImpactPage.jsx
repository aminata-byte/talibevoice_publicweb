import { useState, useEffect } from "react";
import { TrendingUp, Users, GraduationCap } from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PartnerSubNav from "../../components/layout/PartnerSubNav";
import partnerService from "../../services/partnerService";
import "./PartnerImpactPage.css";

const STATUT_LABELS = {
  en_attente: "En attente",
  valide: "Validée",
  actif: "Active",
  inactif: "Inactive",
};

function PartnerImpactPage() {
  const [impact, setImpact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchImpact = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await partnerService.getImpact();
      setImpact(data);
    } catch (err) {
      setError(
        err.response?.data?.message || "Impossible de charger votre impact.",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImpact();
  }, []);

  const stats = [
    {
      icon: <Users size={24} />,
      number: loading ? "..." : (impact?.total_formes ?? 0),
      label: "Talibés inscrits",
    },
    {
      icon: <GraduationCap size={24} />,
      number: loading ? "..." : (impact?.total_formations ?? 0),
      label: "Offres soumises",
    },
    {
      icon: <TrendingUp size={24} />,
      number: loading ? "..." : (impact?.total_inseres ?? 0),
      label: "Insertions validées",
    },
  ];

  return (
    <div>
      <Navbar />
      <PartnerSubNav />

      <div className="pimpact">
      <div className="pimpact__content">
        {/* Titre */}
        <div className="pimpact__hero">
          <h1 className="pimpact__title">Votre Impact</h1>
          <p className="pimpact__subtitle">
            Suivez l'évolution de votre contribution à l'insertion des talibés.
          </p>
        </div>

        {error && (
          <p style={{ color: "var(--tertiary)", fontSize: "14px" }}>
            {error}
          </p>
        )}

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

        {/* Mes offres */}
        <div className="pimpact__historique">
          <h2 className="pimpact__section-title">Mes offres</h2>
          {!loading && (impact?.formations?.length ?? 0) === 0 ? (
            <p className="pimpact__subtitle">
              Aucune offre soumise pour le moment.
            </p>
          ) : (
            <table className="pimpact__table">
              <thead>
                <tr>
                  <th>Titre</th>
                  <th>Domaine</th>
                  <th>Statut</th>
                </tr>
              </thead>
              <tbody>
                {(impact?.formations ?? []).map((f) => (
                  <tr key={f.id}>
                    <td>{f.titre}</td>
                    <td>{f.domaine}</td>
                    <td>{STATUT_LABELS[f.statut] || f.statut}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
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
      </div>

      <Footer />
    </div>
  );
}

export default PartnerImpactPage;
