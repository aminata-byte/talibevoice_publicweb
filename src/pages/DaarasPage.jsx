import { useState, useEffect } from "react";
import { Search, MapPin, Users, Map, List } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import daaraService from "../services/daaraService";
import "./DaarasPage.css";

const regions = [
  "Toutes les régions",
  "Dakar",
  "Thiès",
  "Louga",
  "Saint-Louis",
];

function DaarasPage() {
  const [daaras, setDaaras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recherche, setRecherche] = useState("");
  const [region, setRegion] = useState("Toutes les régions");
  const [vue, setVue] = useState("liste");
  const [selectedDaara, setSelectedDaara] = useState(null);
  const [besoins, setBesoins] = useState([]);
  const [loadingBesoins, setLoadingBesoins] = useState(false);

  useEffect(() => {
    fetchDaaras();
  }, []);

  const fetchDaaras = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await daaraService.getAll();
      setDaaras(data);
    } catch (err) {
      setError("Erreur lors du chargement des daaras.");
    } finally {
      setLoading(false);
    }
  };

  const handleSelectDaara = async (daara) => {
    setSelectedDaara(daara);
    setLoadingBesoins(true);
    try {
      const data = await daaraService.getBesoins(daara.id);
      setBesoins(data);
    } catch (err) {
      setBesoins([]);
    } finally {
      setLoadingBesoins(false);
    }
  };

  const daarasFiltres = daaras.filter((d) => {
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
          <div className="daaras__header">
            <h1 className="daaras__title">Exploration</h1>
            <span className="daaras__count">
              {loading
                ? "Chargement..."
                : `${daarasFiltres.length} Daaras trouvées`}
            </span>
          </div>

          <div className="daaras__filters">
            <div className="daaras__search">
              <Search size={16} className="daaras__search-icon" />
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
                <Map size={16} /> Carte
              </button>
              <button
                className={`daaras__toggle-btn ${vue === "liste" ? "active" : ""}`}
                onClick={() => setVue("liste")}
              >
                <List size={16} /> Liste
              </button>
            </div>
          </div>

          {error && (
            <div
              style={{
                color: "var(--tertiary)",
                textAlign: "center",
                padding: "2rem",
              }}
            >
              {error}
            </div>
          )}

          {loading ? (
            <div
              style={{
                textAlign: "center",
                padding: "3rem",
                color: "var(--text-secondary)",
              }}
            >
              Chargement des daaras...
            </div>
          ) : (
            <div className="daaras__list">
              {daarasFiltres.map((daara) => (
                <div
                  key={daara.id}
                  className="daara__card"
                  onClick={() => handleSelectDaara(daara)}
                >
                  <div className="daara__card-image">
                    <MapPin size={32} color="var(--primary)" />
                  </div>
                  <div className="daara__card-content">
                    <div className="daara__card-header">
                      <h3 className="daara__card-name">{daara.nom}</h3>
                      {daara.besoins && daara.besoins.length > 0 && (
                        <span className="daara__card-badge">
                          {daara.besoins.length} Besoin
                          {daara.besoins.length > 1 ? "s" : ""}
                        </span>
                      )}
                    </div>
                    <p className="daara__card-location">
                      <MapPin size={13} /> {daara.adresse}
                    </p>
                    <p className="daara__card-talibés">
                      <Users size={13} /> {daara.nombre_talibes} Talibés
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

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
                  <MapPin size={13} /> {selectedDaara.adresse}
                </p>
                <p className="daara__modal-talibés">
                  <Users size={13} /> {selectedDaara.nombre_talibes} Talibés
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
                Besoins actuels ({loadingBesoins ? "..." : besoins.length})
              </h3>
              {loadingBesoins ? (
                <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                  Chargement...
                </p>
              ) : besoins.length === 0 ? (
                <p className="daara__modal-empty">
                  Aucun besoin signalé pour ce daara.
                </p>
              ) : (
                <div className="daara__modal-besoins">
                  {besoins.map((besoin, index) => (
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
                Faire un don pour ce daara
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
