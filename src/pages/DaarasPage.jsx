import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./DaarasPage.css";

const daarasData = [
  {
    id: 1,
    nom: "Daara Al Nour",
    localisation: "Dakar Plateau, Dakar",
    talibés: 74,
    besoins: 3,
    region: "Dakar",
  },
  {
    id: 2,
    nom: "Darou Salam",
    localisation: "Mbour, Thiès",
    talibés: 112,
    besoins: 1,
    region: "Thiès",
  },
  {
    id: 3,
    nom: "Complex Touba",
    localisation: "Darou Mousty, Louga",
    talibés: 245,
    besoins: 5,
    region: "Louga",
  },
  {
    id: 4,
    nom: "Daara Malika",
    localisation: "Malika, Dakar",
    talibés: 89,
    besoins: 2,
    region: "Dakar",
  },
  {
    id: 5,
    nom: "Daara Tivaouane",
    localisation: "Tivaouane, Thiès",
    talibés: 134,
    besoins: 0,
    region: "Thiès",
  },
  {
    id: 6,
    nom: "Daara Saint-Louis",
    localisation: "Saint-Louis",
    talibés: 67,
    besoins: 4,
    region: "Saint-Louis",
  },
];

const regions = [
  "Toutes les régions",
  "Dakar",
  "Thiès",
  "Louga",
  "Saint-Louis",
];

function DaarasPage() {
  const [recherche, setRecherche] = useState("");
  const [region, setRegion] = useState("Toutes les régions");
  const [vue, setVue] = useState("liste");

  const daarasFiltres = daarasData.filter((d) => {
    const matchRecherche = d.nom
      .toLowerCase()
      .includes(recherche.toLowerCase());
    const matchRegion = region === "Toutes les régions" || d.region === region;
    return matchRecherche && matchRegion;
  });

  return (
    <div>
      <Navbar />
      <div className="daaras">
        <div className="daaras__container">
          {/* Header */}
          <div className="daaras__header">
            <h1 className="daaras__title">Exploration</h1>
            <span className="daaras__count">
              {daarasFiltres.length} Daaras trouvées
            </span>
          </div>

          {/* Filtres */}
          <div className="daaras__filters">
            <div className="daaras__search">
              <span className="daaras__search-icon">🔍</span>
              <input
                type="text"
                placeholder="Rechercher une Daara..."
                value={recherche}
                onChange={(e) => setRecherche(e.target.value)}
                className="daaras__search-input"
              />
            </div>
            <select
              className="daaras__select"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            >
              {regions.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
            <div className="daaras__toggle">
              <button
                className={`daaras__toggle-btn ${vue === "carte" ? "active" : ""}`}
                onClick={() => setVue("carte")}
              >
                Carte
              </button>
              <button
                className={`daaras__toggle-btn ${vue === "liste" ? "active" : ""}`}
                onClick={() => setVue("liste")}
              >
                Liste
              </button>
            </div>
          </div>

          {/* Liste */}
          <div className="daaras__list">
            {daarasFiltres.map((daara) => (
              <div key={daara.id} className="daara__card">
                <div className="daara__card-image">
                  <span>🕌</span>
                </div>
                <div className="daara__card-content">
                  <div className="daara__card-header">
                    <h3 className="daara__card-name">{daara.nom}</h3>
                    {daara.besoins > 0 && (
                      <span className="daara__card-badge">
                        {daara.besoins} Besoin{daara.besoins > 1 ? "s" : ""}
                      </span>
                    )}
                  </div>
                  <p className="daara__card-location">
                    📍 {daara.localisation}
                  </p>
                  <p className="daara__card-talibés">
                    👥 {daara.talibés} Talibés
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DaarasPage;
