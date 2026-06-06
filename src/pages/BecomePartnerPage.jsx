import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./BecomePartnerPage.css";

function BecomePartnerPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    organisation: "",
    domaine: "Formation",
    contact: "",
    email: "",
    telephone: "",
    motivation: "",
  });

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert(
      "Candidature soumise ! Vous recevrez votre code partenaire sous 48h.",
    );
    navigate("/");
  };

  return (
    <div>
      <Navbar />

      <div className="partner">
        <div className="partner__container">
          {/* Titre */}
          <div className="partner__header">
            <h1 className="partner__title">Devenir Partenaire</h1>
            <p className="partner__subtitle">
              Rejoignez l'écosystème TalibeVoice pour transformer l'avenir des
              apprenants. Remplissez le formulaire ci-dessous et vous recevrez
              votre code partenaire sous 48h après validation.
            </p>
          </div>

          {/* Formulaire */}
          <div className="partner__form">
            <div className="partner__form-group">
              <label className="partner__label">Nom de l'organisation</label>
              <input
                type="text"
                name="organisation"
                placeholder="Ex: École Polytechnique"
                value={form.organisation}
                onChange={handleForm}
                className="partner__input"
              />
            </div>

            <div className="partner__form-group">
              <label className="partner__label">Domaine d'activité</label>
              <select
                name="domaine"
                value={form.domaine}
                onChange={handleForm}
                className="partner__input"
              >
                <option>Formation</option>
                <option>Emploi</option>
                <option>Stage</option>
                <option>Autre</option>
              </select>
            </div>

            <div className="partner__form-group">
              <label className="partner__label">Nom du contact</label>
              <input
                type="text"
                name="contact"
                placeholder="Votre nom complet"
                value={form.contact}
                onChange={handleForm}
                className="partner__input"
              />
            </div>

            <div className="partner__form-group">
              <label className="partner__label">Email professionnel</label>
              <input
                type="email"
                name="email"
                placeholder="contact@organisation.com"
                value={form.email}
                onChange={handleForm}
                className="partner__input"
              />
            </div>

            <div className="partner__form-group">
              <label className="partner__label">Téléphone</label>
              <input
                type="tel"
                name="telephone"
                placeholder="+221..."
                value={form.telephone}
                onChange={handleForm}
                className="partner__input"
              />
            </div>

            <div className="partner__form-group">
              <label className="partner__label">Message de motivation</label>
              <textarea
                name="motivation"
                placeholder="Expliquez brièvement votre motivation à nous rejoindre..."
                value={form.motivation}
                onChange={handleForm}
                className="partner__input partner__textarea"
                rows={5}
              />
            </div>

            <button className="partner__submit" onClick={handleSubmit}>
              Soumettre ma candidature →
            </button>

            <p className="partner__note">
              Vous recevrez votre code partenaire sous 48h après validation.
            </p>

            {/* Lien connexion */}
            <div className="partner__login-link">
              <p>Vous êtes déjà partenaire ?</p>
              <Link to="/partenaire/login" className="partner__login-btn">
                Connectez-vous à votre espace
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default BecomePartnerPage;
