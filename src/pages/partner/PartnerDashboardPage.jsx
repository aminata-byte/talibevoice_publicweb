import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Briefcase, ChevronRight } from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PartnerSubNav from "../../components/layout/PartnerSubNav";
import partnerService from "../../services/partnerService";
import "./PartnerDashboardPage.css";

function PartnerDashboardPage() {
  const navigate = useNavigate();
  const partenaire = JSON.parse(localStorage.getItem("partenaire") || "{}");
  const [impact, setImpact] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchImpact = async () => {
    setLoading(true);
    try {
      const data = await partnerService.getImpact();
      setImpact(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImpact();
  }, []);

  return (
    <div>
      <Navbar />
      <PartnerSubNav />

      <div className="pdash">
        <div className="pdash__container">
          {/* Hero */}
          <div className="pdash__hero">
            <p className="pdash__hero-label">Dashboard Partenaire</p>
            <h1 className="pdash__hero-name">
              Bienvenue, {partenaire.nom || "Partenaire"}
            </h1>
            <p className="pdash__hero-code">
              Code : {partenaire.code_partenaire || "—"}
            </p>
          </div>

          {/* Stats */}
          <div className="pdash__stats">
            <div className="pdash__stat">
              <p className="pdash__stat-value">
                {loading ? "..." : (impact?.total_formations ?? 0)}
              </p>
              <p className="pdash__stat-label">Offres soumises</p>
            </div>
            <div className="pdash__stat">
              <p className="pdash__stat-value">
                {loading ? "..." : (impact?.total_formes ?? 0)}
              </p>
              <p className="pdash__stat-label">Talibés inscrits</p>
            </div>
            <div className="pdash__stat">
              <p className="pdash__stat-value">
                {loading ? "..." : (impact?.total_inseres ?? 0)}
              </p>
              <p className="pdash__stat-label">Insertions validées</p>
            </div>
          </div>

          {/* Actions rapides */}
          <div className="pdash__section">
            <h2 className="pdash__section-title">Actions rapides</h2>
            <div className="pdash__actions">
              <button
                className="pdash__action-item"
                onClick={() => navigate("/partenaire/soumettre-offre")}
              >
                <div className="pdash__action-icon">
                  <GraduationCap size={20} />
                </div>
                <span>Soumettre offre de formation</span>
                <ChevronRight size={18} />
              </button>
              <button
                className="pdash__action-item"
                onClick={() => navigate("/partenaire/soumettre-offre")}
              >
                <div className="pdash__action-icon">
                  <Briefcase size={20} />
                </div>
                <span>Soumettre offre de stage</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Résumé impact */}
          {!loading && impact && (
            <div className="pdash__section">
              <h2 className="pdash__section-title">Mon impact</h2>
              <div className="pdash__impact-grid">
                <div className="pdash__impact-item">
                  <p className="pdash__impact-value">
                    {impact.total_emplois ?? 0}
                  </p>
                  <p className="pdash__impact-label">Emplois créés</p>
                </div>
                <div className="pdash__impact-item">
                  <p className="pdash__impact-value">
                    {impact.total_stages ?? 0}
                  </p>
                  <p className="pdash__impact-label">Stages offerts</p>
                </div>
                <div className="pdash__impact-item">
                  <p className="pdash__impact-value">
                    {impact.total_formations ?? 0}
                  </p>
                  <p className="pdash__impact-label">Formations</p>
                </div>
                <div className="pdash__impact-item">
                  <p className="pdash__impact-value">
                    {impact.total_formes ?? 0}
                  </p>
                  <p className="pdash__impact-label">Talibés formés</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PartnerDashboardPage;
