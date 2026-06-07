import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Home,
  Briefcase,
  BarChart3,
  User,
  Building2,
  Mail,
  Phone,
  Globe,
  LogOut,
} from "lucide-react";
import "./PartnerProfilePage.css";

function PartnerProfilePage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    organisation: "École Polytechnique de Dakar",
    domaine: "Formation",
    contact: "Mamadou Diallo",
    email: "contact@epd.sn",
    telephone: "+221 33 821 00 00",
    site: "www.epd.sn",
  });
  const [editing, setEditing] = useState(false);

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="pprofile">
      {/* Header */}
      <div className="pprofile__header">
        <div className="pprofile__header-left">
          <img
            src="/src/assets/logo.jpg"
            alt="TalibeVoice"
            className="pprofile__logo-img"
          />
        </div>
        <button
          className="pprofile__logout"
          onClick={() => navigate("/partenaire/login")}
        >
          <LogOut size={20} />
        </button>
      </div>

      <div className="pprofile__content">
        {/* Avatar + nom */}
        <div className="pprofile__hero">
          <div className="pprofile__avatar">
            <Building2 size={32} />
          </div>
          <div>
            <h1 className="pprofile__name">{form.organisation}</h1>
            <p className="pprofile__code">Code partenaire : DT-2024-X1</p>
            <span className="pprofile__badge">Partenaire validé</span>
          </div>
        </div>

        {/* Informations */}
        <div className="pprofile__card">
          <div className="pprofile__card-header">
            <h2 className="pprofile__section-title">Informations</h2>
            <button
              className="pprofile__edit-btn"
              onClick={() => setEditing(!editing)}
            >
              {editing ? "Annuler" : "Modifier"}
            </button>
          </div>

          <div className="pprofile__form">
            <div className="pprofile__form-group">
              <label className="pprofile__label">
                <Building2 size={14} /> Nom de l'organisation
              </label>
              {editing ? (
                <input
                  type="text"
                  name="organisation"
                  value={form.organisation}
                  onChange={handleForm}
                  className="pprofile__input"
                />
              ) : (
                <p className="pprofile__value">{form.organisation}</p>
              )}
            </div>

            <div className="pprofile__form-group">
              <label className="pprofile__label">
                <Globe size={14} /> Domaine d'activité
              </label>
              {editing ? (
                <select
                  name="domaine"
                  value={form.domaine}
                  onChange={handleForm}
                  className="pprofile__input"
                >
                  <option>Formation</option>
                  <option>Emploi</option>
                  <option>Stage</option>
                  <option>Autre</option>
                </select>
              ) : (
                <p className="pprofile__value">{form.domaine}</p>
              )}
            </div>

            <div className="pprofile__form-group">
              <label className="pprofile__label">
                <User size={14} /> Nom du contact
              </label>
              {editing ? (
                <input
                  type="text"
                  name="contact"
                  value={form.contact}
                  onChange={handleForm}
                  className="pprofile__input"
                />
              ) : (
                <p className="pprofile__value">{form.contact}</p>
              )}
            </div>

            <div className="pprofile__form-group">
              <label className="pprofile__label">
                <Mail size={14} /> Email
              </label>
              {editing ? (
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleForm}
                  className="pprofile__input"
                />
              ) : (
                <p className="pprofile__value">{form.email}</p>
              )}
            </div>

            <div className="pprofile__form-group">
              <label className="pprofile__label">
                <Phone size={14} /> Téléphone
              </label>
              {editing ? (
                <input
                  type="tel"
                  name="telephone"
                  value={form.telephone}
                  onChange={handleForm}
                  className="pprofile__input"
                />
              ) : (
                <p className="pprofile__value">{form.telephone}</p>
              )}
            </div>

            <div className="pprofile__form-group">
              <label className="pprofile__label">
                <Globe size={14} /> Site web
              </label>
              {editing ? (
                <input
                  type="text"
                  name="site"
                  value={form.site}
                  onChange={handleForm}
                  className="pprofile__input"
                />
              ) : (
                <p className="pprofile__value">{form.site}</p>
              )}
            </div>

            {editing && (
              <button
                className="pprofile__save-btn"
                onClick={() => setEditing(false)}
              >
                Enregistrer les modifications
              </button>
            )}
          </div>
        </div>

        {/* Déconnexion */}
        <button
          className="pprofile__disconnect-btn"
          onClick={() => navigate("/partenaire/login")}
        >
          <LogOut size={18} />
          Se déconnecter
        </button>
      </div>

      {/* Bottom nav */}
      <div className="pprofile__bottom-nav">
        <button
          className="pprofile__nav-btn"
          onClick={() => navigate("/partenaire/dashboard")}
        >
          <Home size={20} />
          <span>Accueil</span>
        </button>
        <Link to="/partenaire/soumettre-offre" className="pprofile__nav-btn">
          <Briefcase size={20} />
          <span>Offres</span>
        </Link>
        <button
          className="pprofile__nav-btn"
          onClick={() => navigate("/partenaire/impact")}
        >
          <BarChart3 size={20} />
          <span>Impact</span>
        </button>
        <button className="pprofile__nav-btn active">
          <User size={20} />
          <span>Profil</span>
        </button>
      </div>
    </div>
  );
}

export default PartnerProfilePage;
