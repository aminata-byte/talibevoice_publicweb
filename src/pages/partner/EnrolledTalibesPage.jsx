import { useState, useEffect, useMemo } from "react";
import { Search, Download, GraduationCap } from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PartnerSubNav from "../../components/layout/PartnerSubNav";
import partnerService from "../../services/partnerService";
import "./EnrolledTalibesPage.css";

const calculerAge = (dateNaissance) => {
  if (!dateNaissance) return null;
  const naissance = new Date(dateNaissance);
  const diff = new Date() - naissance;
  return Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
};

const STATUT_LABELS = {
  en_attente: "En attente",
  valide: "En cours",
  en_cours: "En cours",
  cloture: "Clôturé",
};

function EnrolledTalibesPage() {
  const [recherche, setRecherche] = useState("");
  const [offre, setOffre] = useState("Filtrer par offre");
  const [insertions, setInsertions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTalibes = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await partnerService.getTalibesInscrits();
      setInsertions(data);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Impossible de charger les talibés inscrits.",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTalibes();
  }, []);

  const talibes = insertions.map((insertion) => ({
    id: insertion.id,
    nom: `${insertion.talibe?.prenom ?? ""} ${insertion.talibe?.nom ?? ""}`.trim(),
    date: insertion.date_insertion
      ? new Date(insertion.date_insertion).toLocaleDateString("fr-FR")
      : new Date(insertion.created_at).toLocaleDateString("fr-FR"),
    age: calculerAge(insertion.talibe?.date_naissance),
    offre: insertion.formation?.titre || insertion.poste || "—",
    statut: STATUT_LABELS[insertion.statut] || insertion.statut,
  }));

  const offresDisponibles = useMemo(() => {
    const titres = talibes
      .map((t) => t.offre)
      .filter((t, i, arr) => t && arr.indexOf(t) === i);
    return ["Filtrer par offre", ...titres];
  }, [talibes]);

  const talibsFiltres = talibes.filter((t) => {
    const matchRecherche = t.nom
      .toLowerCase()
      .includes(recherche.toLowerCase());
    const matchOffre = offre === "Filtrer par offre" || t.offre === offre;
    return matchRecherche && matchOffre;
  });

  const getStatutClass = (statut) => {
    if (statut === "En cours") return "etbadge etbadge--green";
    if (statut === "En attente") return "etbadge etbadge--yellow";
    if (statut === "Clôturé") return "etbadge etbadge--gray";
    return "etbadge";
  };

  return (
    <div>
      <Navbar />
      <PartnerSubNav />

      <div className="etalibes">
      <div className="etalibes__container">
        {/* Titre + Export */}
        <div className="etalibes__top">
          <div>
            <h1 className="etalibes__title">Talibés inscrits</h1>
            <p className="etalibes__subtitle">
              Gérer les inscriptions aux formations
            </p>
          </div>
          <button className="etalibes__export">
            <Download size={16} />
            Exporter
          </button>
        </div>

        {/* Filtres */}
        <div className="etalibes__filters">
          <div className="etalibes__search">
            <Search size={16} />
            <input
              type="text"
              placeholder="Rechercher un talibé..."
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
              className="etalibes__search-input"
            />
          </div>
          <select
            className="etalibes__select"
            value={offre}
            onChange={(e) => setOffre(e.target.value)}
          >
            {offresDisponibles.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>

        {error && (
          <p style={{ color: "var(--tertiary)", fontSize: "14px" }}>
            {error}
          </p>
        )}

        {loading && <p className="etalibes__subtitle">Chargement...</p>}

        {!loading && !error && talibsFiltres.length === 0 && (
          <p className="etalibes__subtitle">Aucun talibé inscrit pour le moment.</p>
        )}

        {/* Liste */}
        <div className="etalibes__list">
          {talibsFiltres.map((talib) => (
            <div key={talib.id} className="etalib__card">
              <div className="etalib__card-header">
                <h3 className="etalib__card-nom">{talib.nom}</h3>
                <span className={getStatutClass(talib.statut)}>
                  {talib.statut}
                </span>
              </div>
              <p className="etalib__card-info">
                Inscrit le {talib.date}
                {talib.age !== null ? ` • ${talib.age} ans` : ""}
              </p>
              <p className="etalib__card-offre">
                <GraduationCap size={14} /> {talib.offre}
              </p>
            </div>
          ))}
        </div>
      </div>
      </div>

      <Footer />
    </div>
  );
}

export default EnrolledTalibesPage;
