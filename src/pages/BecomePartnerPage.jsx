import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./BecomePartnerPage.css";

function BecomePartnerPage() {
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
  };

  const avantages = [
    {
      icon: "👥",
      title: "Impact Social",
      description:
        "Contribuez activement à l'insertion professionnelle et au développement des compétences locales.",
    },
    {
      icon: "👁️",
      title: "Visibilité",
      description:
        "Mettez en avant vos offres et votre engagement auprès d'une communauté qualifiée et engagée.",
    },
    {
      icon: "✳️",
      title: "Réseau d'Excellence",
      description:
        "Connectez-vous avec d'autres institutions leaders et partagez des bonnes pratiques sectorielles.",
    },
  ];

  return (
    <div>
      <Navbar />

      {/* Hero */}
      <div className="partner__hero">
        <div className="partner__hero-container">
          <h1 className="partner__hero-title">Devenir Partenaire</h1>
          <p className="partner__hero-subtitle">
            Rejoignez l'écosystème TalibeVoice pour transformer l'avenir des
            apprenants.
          </p>
        </div>
      </div>

      <div className="partner">
        <div className="partner__container">
          {/* Avantages */}
          <div className="partner__avantages">
            {avantages.map((a, index) => (
              <div key={index} className="partner__avantage-card">
                <span className="partner__avantage-icon">{a.icon}</span>
                <h3 className="partner__avantage-title">{a.title}</h3>
                <p className="partner__avantage-description">{a.description}</p>
              </div>
            ))}
          </div>

          {/* Formulaire */}
          <div className="partner__form-container">
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
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default BecomePartnerPage;
