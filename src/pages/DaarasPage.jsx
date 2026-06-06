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
    listeBesoins: [
      {
        type: "Alimentaire",
        description: "50 sacs de riz",
        priorite: "urgent",
      },
      {
        type: "Médical",
        description: "Médicaments contre le paludisme",
        priorite: "urgent",
      },
      {
        type: "Éducatif",
        description: "30 kits scolaires",
        priorite: "normal",
      },
    ],
  },
  {
    id: 2,
    nom: "Darou Salam",
    localisation: "Mbour, Thiès",
    talibés: 112,
    besoins: 1,
    region: "Thiès",
    listeBesoins: [
      {
        type: "Alimentaire",
        description: "Huile et sucre pour 1 mois",
        priorite: "normal",
      },
    ],
  },
  {
    id: 3,
    nom: "Complex Touba",
    localisation: "Darou Mousty, Louga",
    talibés: 245,
    besoins: 5,
    region: "Louga",
    listeBesoins: [
      {
        type: "Alimentaire",
        description: "100 sacs de riz",
        priorite: "urgent",
      },
      {
        type: "Médical",
        description: "Vaccins et soins de base",
        priorite: "urgent",
      },
      {
        type: "Éducatif",
        description: "Tableaux et craies",
        priorite: "normal",
      },
      {
        type: "Infrastructure",
        description: "Réparation du toit",
        priorite: "urgent",
      },
      {
        type: "Vêtements",
        description: "Tenues pour 80 talibés",
        priorite: "faible",
      },
    ],
  },
  {
    id: 4,
    nom: "Daara Malika",
    localisation: "Malika, Dakar",
    talibés: 89,
    besoins: 2,
    region: "Dakar",
    listeBesoins: [
      {
        type: "Éducatif",
        description: "50 livres de coran",
        priorite: "normal",
      },
      {
        type: "Alimentaire",
        description: "Farine et lait",
        priorite: "faible",
      },
    ],
  },
  {
    id: 5,
    nom: "Daara Tivaouane",
    localisation: "Tivaouane, Thiès",
    talibés: 134,
    besoins: 0,
    region: "Thiès",
    listeBesoins: [],
  },
  {
    id: 6,
    nom: "Daara Saint-Louis",
    localisation: "Saint-Louis",
    talibés: 67,
    besoins: 4,
    region: "Saint-Louis",
    listeBesoins: [
      {
        type: "Alimentaire",
        description: "Riz et huile pour 2 mois",
        priorite: "urgent",
      },
      {
        type: "Médical",
        description: "Trousse de premiers secours",
        priorite: "normal",
      },
      {
        type: "Infrastructure",
        description: "Rénovation des dortoirs",
        priorite: "normal",
      },
      {
        type: "Éducatif",
        description: "Matériel pédagogique",
        priorite: "faible",
      },
    ],
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
  const [selectedDaara, setSelectedDaara] = useState(null);

  const daarasFiltres = daarasData.filter((d) => {
    const matchRecherche = d.nom
      .toLowerCase()
      .includes(recherche.toLowerCase());
    const matchRegion = region === "Toutes les régions" || d.region === region;
    return matchRecherche && matchRegion;
  });

  const getPrioriteClass = (priorite) => {
    if (priorite === "urgent") return "besoin__badge besoin__badge--urgent";
    if (priorite === "normal") return "besoin__badge besoin__badge--normal";
    return "besoin__badge besoin__badge--faible";
  };

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
              <div
                key={daara.id}
                className="daara__card"
                onClick={() => setSelectedDaara(daara)}
              >
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

      {/* Modal détail daara */}
      {selectedDaara && (
        <div
          className="daara__modal-overlay"
          onClick={() => setSelectedDaara(null)}
        >
          <div className="daara__modal" onClick={(e) => e.stopPropagation()}>
            <div className="daara__modal-header">
              <div>
                <h2 className="daara__modal-title">{selectedDaara.nom}</h2>
                <p className="daara__modal-location">
                  📍 {selectedDaara.localisation}
                </p>
                <p className="daara__modal-talibés">
                  👥 {selectedDaara.talibés} Talibés
                </p>
              </div>
              <button
                className="daara__modal-close"
                onClick={() => setSelectedDaara(null)}
              >
                ✕
              </button>
            </div>

            <div className="daara__modal-body">
              <h3 className="daara__modal-subtitle">
                Besoins actuels ({selectedDaara.listeBesoins.length})
              </h3>

              {selectedDaara.listeBesoins.length === 0 ? (
                <p className="daara__modal-empty">
                  Aucun besoin signalé pour ce daara.
                </p>
              ) : (
                <div className="daara__modal-besoins">
                  {selectedDaara.listeBesoins.map((besoin, index) => (
                    <div key={index} className="besoin__item">
                      <div className="besoin__item-header">
                        <span className="besoin__type">{besoin.type}</span>
                        <span className={getPrioriteClass(besoin.priorite)}>
                          {besoin.priorite}
                        </span>
                      </div>
                      <p className="besoin__description">
                        {besoin.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="daara__modal-footer">
              <a href="/faire-un-don" className="daara__modal-btn">
                🤝 Faire un don pour ce daara
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default DaarasPage;
