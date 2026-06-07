import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Send } from "lucide-react";
import "./SubmitOfferPage.css";

function SubmitOfferPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("formation");
  const [form, setForm] = useState({
    titre: "",
    domaine: "",
    description: "",
    dateDebut: "",
    dateFin: "",
    places: "",
    lieu: "",
    prerequis: "",
    poste: "",
    typeContrat: "",
    duree: "",
    profil: "",
  });

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert(
      "Offre soumise ! Elle sera validée par l'administrateur avant publication.",
    );
    navigate("/partenaire/dashboard");
  };

  return (
    <div className="soffer">
      {/* Header */}
      <div className="soffer__header">
        <button
          className="soffer__back"
          onClick={() => navigate("/partenaire/dashboard")}
        >
          <ArrowLeft size={18} />
          Soumettre une offre
        </button>
      </div>

      <div className="soffer__container">
        {/* Tabs */}
        <div className="soffer__tabs">
          <button
            className={`soffer__tab ${activeTab === "formation" ? "active" : ""}`}
            onClick={() => setActiveTab("formation")}
          >
            Formation
          </button>
          <button
            className={`soffer__tab ${activeTab === "stage" ? "active" : ""}`}
            onClick={() => setActiveTab("stage")}
          >
            Stage
          </button>
          <button
            className={`soffer__tab ${activeTab === "emploi" ? "active" : ""}`}
            onClick={() => setActiveTab("emploi")}
          >
            Emploi
          </button>
        </div>

        {/* Formulaire Formation */}
        {activeTab === "formation" && (
          <div className="soffer__form">
            <div className="soffer__form-group">
              <label className="soffer__label">Titre de la formation</label>
              <input
                type="text"
                name="titre"
                placeholder="ex: Développement Web Fullstack"
                value={form.titre}
                onChange={handleForm}
                className="soffer__input"
              />
            </div>
            <div className="soffer__form-group">
              <label className="soffer__label">Domaine</label>
              <select
                name="domaine"
                value={form.domaine}
                onChange={handleForm}
                className="soffer__input"
              >
                <option value="">Sélectionner un domaine</option>
                <option>Informatique</option>
                <option>Artisanat</option>
                <option>Agriculture</option>
                <option>Commerce</option>
                <option>Autre</option>
              </select>
            </div>
            <div className="soffer__form-group">
              <label className="soffer__label">Description</label>
              <textarea
                name="description"
                placeholder="Décrivez le contenu et les objectifs de la formation..."
                value={form.description}
                onChange={handleForm}
                className="soffer__input soffer__textarea"
                rows={4}
              />
            </div>
            <div className="soffer__row">
              <div className="soffer__form-group">
                <label className="soffer__label">Date de début</label>
                <input
                  type="date"
                  name="dateDebut"
                  value={form.dateDebut}
                  onChange={handleForm}
                  className="soffer__input"
                />
              </div>
              <div className="soffer__form-group">
                <label className="soffer__label">Date de fin</label>
                <input
                  type="date"
                  name="dateFin"
                  value={form.dateFin}
                  onChange={handleForm}
                  className="soffer__input"
                />
              </div>
            </div>
            <div className="soffer__form-group">
              <label className="soffer__label">Nombre de places</label>
              <input
                type="number"
                name="places"
                placeholder="ex: 25"
                value={form.places}
                onChange={handleForm}
                className="soffer__input"
              />
            </div>
            <div className="soffer__form-group">
              <label className="soffer__label">Lieu</label>
              <input
                type="text"
                name="lieu"
                placeholder="Ville ou Adresse"
                value={form.lieu}
                onChange={handleForm}
                className="soffer__input"
              />
            </div>
            <div className="soffer__form-group">
              <label className="soffer__label">Prérequis</label>
              <textarea
                name="prerequis"
                placeholder="Quelles sont les compétences ou diplômes requis ?"
                value={form.prerequis}
                onChange={handleForm}
                className="soffer__input soffer__textarea"
                rows={3}
              />
            </div>
          </div>
        )}

        {/* Formulaire Stage */}
        {activeTab === "stage" && (
          <div className="soffer__form">
            <div className="soffer__form-group">
              <label className="soffer__label">Titre du stage</label>
              <input
                type="text"
                name="poste"
                placeholder="ex: Stage en développement mobile"
                value={form.poste}
                onChange={handleForm}
                className="soffer__input"
              />
            </div>
            <div className="soffer__form-group">
              <label className="soffer__label">Description</label>
              <textarea
                name="description"
                placeholder="Décrivez le stage..."
                value={form.description}
                onChange={handleForm}
                className="soffer__input soffer__textarea"
                rows={4}
              />
            </div>
            <div className="soffer__row">
              <div className="soffer__form-group">
                <label className="soffer__label">Date de début</label>
                <input
                  type="date"
                  name="dateDebut"
                  value={form.dateDebut}
                  onChange={handleForm}
                  className="soffer__input"
                />
              </div>
              <div className="soffer__form-group">
                <label className="soffer__label">Durée</label>
                <input
                  type="text"
                  name="duree"
                  placeholder="ex: 3 mois"
                  value={form.duree}
                  onChange={handleForm}
                  className="soffer__input"
                />
              </div>
            </div>
            <div className="soffer__form-group">
              <label className="soffer__label">Lieu</label>
              <input
                type="text"
                name="lieu"
                placeholder="Ville ou Adresse"
                value={form.lieu}
                onChange={handleForm}
                className="soffer__input"
              />
            </div>
            <div className="soffer__form-group">
              <label className="soffer__label">Profil recherché</label>
              <textarea
                name="profil"
                placeholder="Décrivez le profil idéal..."
                value={form.profil}
                onChange={handleForm}
                className="soffer__input soffer__textarea"
                rows={3}
              />
            </div>
          </div>
        )}

        {/* Formulaire Emploi */}
        {activeTab === "emploi" && (
          <div className="soffer__form">
            <div className="soffer__form-group">
              <label className="soffer__label">Poste</label>
              <input
                type="text"
                name="poste"
                placeholder="ex: Développeur Junior"
                value={form.poste}
                onChange={handleForm}
                className="soffer__input"
              />
            </div>
            <div className="soffer__form-group">
              <label className="soffer__label">Description</label>
              <textarea
                name="description"
                placeholder="Décrivez le poste..."
                value={form.description}
                onChange={handleForm}
                className="soffer__input soffer__textarea"
                rows={4}
              />
            </div>
            <div className="soffer__form-group">
              <label className="soffer__label">Type de contrat</label>
              <select
                name="typeContrat"
                value={form.typeContrat}
                onChange={handleForm}
                className="soffer__input"
              >
                <option value="">Sélectionner</option>
                <option>CDI</option>
                <option>CDD</option>
                <option>Freelance</option>
              </select>
            </div>
            <div className="soffer__form-group">
              <label className="soffer__label">Lieu</label>
              <input
                type="text"
                name="lieu"
                placeholder="Ville ou Adresse"
                value={form.lieu}
                onChange={handleForm}
                className="soffer__input"
              />
            </div>
            <div className="soffer__form-group">
              <label className="soffer__label">Profil recherché</label>
              <textarea
                name="profil"
                placeholder="Décrivez le profil idéal..."
                value={form.profil}
                onChange={handleForm}
                className="soffer__input soffer__textarea"
                rows={3}
              />
            </div>
          </div>
        )}

        {/* Bouton + Note */}
        <button className="soffer__submit" onClick={handleSubmit}>
          <Send size={18} />
          Soumettre l'offre
        </button>

        <div className="soffer__note">
          <Send size={14} />
          <p>
            Note : Votre offre sera validée par l'administrateur avant
            publication.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SubmitOfferPage;
