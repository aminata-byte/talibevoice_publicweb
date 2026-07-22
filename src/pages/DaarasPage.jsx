import { useState, useEffect, useMemo } from "react";
import { Search, MapPin, Users, Map, List } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import daaraService from "../services/daaraService";
import DaarasMap from "../components/sections/DaarasMap";
import "./DaarasPage.css";

function DaarasPage() {
  const [recherche, setRecherche] = useState("");
  const [region, setRegion] = useState("Toutes les régions");
  const [vue, setVue] = useState("liste");
  const [selectedDaara, setSelectedDaara] = useState(null);
  const [daarasData, setDaarasData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDaaras = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await daaraService.getAll();
      setDaarasData(
        data.map((d) => ({
          id: d.id,
          nom: d.nom,
          localisation:
            [d.commune, d.region].filter(Boolean).join(", ") || d.adresse,
          talibés: d.talibes_count ?? d.nombre_talibes ?? 0,
          besoins: (d.besoins || []).length,
          region: d.region,
          latitude: d.latitude ? Number(d.latitude) : null,
          longitude: d.longitude ? Number(d.longitude) : null,
          listeBesoins: (d.besoins || []).map((b) => ({
            type: b.type,
            description: b.description,
            priorite: b.priorite,
          })),
        })),
      );
    } catch (err) {
      setError(
        err.response?.data?.message || "Impossible de charger les daaras.",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDaaras();
  }, []);

  const regions = useMemo(() => {
    const uniques = daarasData
      .map((d) => d.region)
      .filter((r, i, arr) => r && arr.indexOf(r) === i);
    return ["Toutes les régions", ...uniques];
  }, [daarasData]);

  const daarasFiltres = daarasData.filter((d) => {
    const matchRecherche = d.nom
      .toLowerCase()
      .includes(recherche.toLowerCase());
    const matchRegion =
      region === "Toutes les régions" || d.region === region;
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
            <p style={{ color: "var(--tertiary)", fontSize: "14px" }}>
              {error}
            </p>
          )}

          {loading && <p>Chargement des daaras...</p>}

          {!loading && !error && daarasFiltres.length === 0 && (
            <p>Aucune daara ne correspond à votre recherche.</p>
          )}

          {!loading && !error && daarasFiltres.length > 0 && (
            <>
              {vue === "liste" ? (
                <div className="daaras__list">
                  {daarasFiltres.map((daara) => (
                    <div
                      key={daara.id}
                      className="daara__card"
                      onClick={() => setSelectedDaara(daara)}
                    >
                      <div className="daara__card-image">
                        <MapPin size={32} color="var(--primary)" />
                      </div>
                      <div className="daara__card-content">
                        <div className="daara__card-header">
                          <h3 className="daara__card-name">{daara.nom}</h3>
                          {daara.besoins > 0 && (
                            <span className="daara__card-badge">
                              {daara.besoins} Besoin
                              {daara.besoins > 1 ? "s" : ""}
                            </span>
                          )}
                        </div>
                        <p className="daara__card-location">
                          <MapPin size={13} /> {daara.localisation}
                        </p>
                        <p className="daara__card-talibés">
                          <Users size={13} /> {daara.talibés} Talibés
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <DaarasMap
                  daaras={daarasFiltres}
                  onSelect={setSelectedDaara}
                />
              )}
            </>
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
                  <MapPin size={13} /> {selectedDaara.localisation}
                </p>
                <p className="daara__modal-talibés">
                  <Users size={13} /> {selectedDaara.talibés} Talibés
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
