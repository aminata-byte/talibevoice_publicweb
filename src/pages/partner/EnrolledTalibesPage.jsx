import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EnrolledTalibesPage.css";

const talibes = [
  {
    id: 1,
    nom: "Mamadou Faye",
    date: "12/05/2024",
    age: 16,
    offre: "Boulangerie Pro",
    statut: "En cours",
  },
  {
    id: 2,
    nom: "Saliou Diallo",
    date: "05/04/2024",
    age: 14,
    offre: "Maraîchage Moderne",
    statut: "En attente",
  },
  {
    id: 3,
    nom: "Omar Sylla",
    date: "15/01/2024",
    age: 17,
    offre: "Couture & Design",
    statut: "Clôturé",
  },
  {
    id: 4,
    nom: "Abdoulaye Ndiaye",
    date: "22/05/2024",
    age: 15,
    offre: "Informatique de gestion",
    statut: "En cours",
  },
  {
    id: 5,
    nom: "Ibrahim Kane",
    date: "10/05/2024",
    age: 14,
    offre: "Boulangerie Pro",
    statut: "En attente",
  },
];

const offres = [
  "Filtrer par offre",
  "Boulangerie Pro",
  "Maraîchage Moderne",
  "Couture & Design",
  "Informatique de gestion",
];

function EnrolledTalibesPage() {
  const navigate = useNavigate();
  const [recherche, setRecherche] = useState("");
  const [offre, setOffre] = useState("Filtrer par offre");

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
    <div className="etalibes">
      {/* Header */}
      <div className="etalibes__header">
        <div className="etalibes__header-left">
          <span className="etalibes__logo-icon">🏠</span>
          <span className="etalibes__logo-text">TalibeVoice</span>
        </div>
        <button
          className="etalibes__logout"
          onClick={() => navigate("/partenaire/login")}
        >
          ↩️
        </button>
      </div>

      <div className="etalibes__container">
        {/* Titre + Export */}
        <div className="etalibes__top">
          <div>
            <h1 className="etalibes__title">Talibés inscrits</h1>
            <p className="etalibes__subtitle">
              Gérer les inscriptions aux formations
            </p>
          </div>
          <button className="etalibes__export">⬇️ Exporter</button>
        </div>

        {/* Filtres */}
        <div className="etalibes__filters">
          <div className="etalibes__search">
            <span>🔍</span>
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
            {offres.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>

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
                Inscrit le {talib.date} • {talib.age} ans
              </p>
              <p className="etalib__card-offre">🎓 {talib.offre}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <div className="etalibes__bottom-nav">
        <button
          className="etalibes__nav-btn"
          onClick={() => navigate("/partenaire/dashboard")}
        >
          <span>🏠</span>
          <span>Accueil</span>
        </button>
        <button className="etalibes__nav-btn active">
          <span>📋</span>
          <span>Offres</span>
        </button>
        <button className="etalibes__nav-btn">
          <span>📊</span>
          <span>Impact</span>
        </button>
        <button className="etalibes__nav-btn">
          <span>👤</span>
          <span>Profil</span>
        </button>
      </div>
    </div>
  );
}

export default EnrolledTalibesPage;
