import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User, Building2, Mail, Phone, Globe, LogOut } from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import PartnerSubNav from "../../components/layout/PartnerSubNav";
import partnerService from "../../services/partnerService";
import "./PartnerProfilePage.css";

function PartnerProfilePage() {
  const navigate = useNavigate();
  const [partenaire, setPartenaire] = useState(null);
  const [form, setForm] = useState({ nom: "", telephone: "", site_web: "" });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(false);

  const fetchProfil = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await partnerService.getProfil();
      setPartenaire(data);
      setForm({
        nom: data.nom || "",
        telephone: data.telephone || "",
        site_web: data.site_web || "",
      });
    } catch (err) {
      setError(
        err.response?.data?.message || "Impossible de charger le profil.",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfil();
  }, []);

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setSaving(true);
    setError(null);
    try {
      const res = await partnerService.updateProfil(form);
      setPartenaire(res.partenaire);
      setEditing(false);
    } catch (err) {
      setError(
        err.response?.data?.message || "Impossible d'enregistrer le profil.",
      );
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("partenaire");
    navigate("/partenaire/login");
  };

  return (
    <div>
      <Navbar />
      <PartnerSubNav />

      <div className="pprofile">
      <div className="pprofile__content">
        {error && (
          <p style={{ color: "var(--tertiary)", fontSize: "14px" }}>
            {error}
          </p>
        )}

        {loading ? (
          <p>Chargement...</p>
        ) : (
          <>
            {/* Avatar + nom */}
            <div className="pprofile__hero">
              <div className="pprofile__avatar">
                <Building2 size={32} />
              </div>
              <div>
                <h1 className="pprofile__name">{partenaire?.nom}</h1>
                <p className="pprofile__code">
                  Code partenaire : {partenaire?.code_partenaire}
                </p>
                <span className="pprofile__badge">
                  {partenaire?.statut === "valide"
                    ? "Partenaire validé"
                    : partenaire?.statut}
                </span>
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
                      name="nom"
                      value={form.nom}
                      onChange={handleForm}
                      className="pprofile__input"
                    />
                  ) : (
                    <p className="pprofile__value">{partenaire?.nom}</p>
                  )}
                </div>

                <div className="pprofile__form-group">
                  <label className="pprofile__label">
                    <Globe size={14} /> Domaine d'activité
                  </label>
                  <p className="pprofile__value">{partenaire?.domaine}</p>
                </div>

                <div className="pprofile__form-group">
                  <label className="pprofile__label">
                    <User size={14} /> Nom du contact
                  </label>
                  <p className="pprofile__value">{partenaire?.nom_contact}</p>
                </div>

                <div className="pprofile__form-group">
                  <label className="pprofile__label">
                    <Mail size={14} /> Email
                  </label>
                  <p className="pprofile__value">{partenaire?.email}</p>
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
                    <p className="pprofile__value">
                      {partenaire?.telephone || "—"}
                    </p>
                  )}
                </div>

                <div className="pprofile__form-group">
                  <label className="pprofile__label">
                    <Globe size={14} /> Site web
                  </label>
                  {editing ? (
                    <input
                      type="text"
                      name="site_web"
                      value={form.site_web}
                      onChange={handleForm}
                      className="pprofile__input"
                    />
                  ) : (
                    <p className="pprofile__value">
                      {partenaire?.site_web || "—"}
                    </p>
                  )}
                </div>

                {editing && (
                  <button
                    className="pprofile__save-btn"
                    onClick={handleSave}
                    disabled={saving}
                  >
                    {saving
                      ? "Enregistrement..."
                      : "Enregistrer les modifications"}
                  </button>
                )}
              </div>
            </div>

            {/* Déconnexion */}
            <button
              className="pprofile__disconnect-btn"
              onClick={handleLogout}
            >
              <LogOut size={18} />
              Se déconnecter
            </button>
          </>
        )}
      </div>
      </div>

      <Footer />
    </div>
  );
}

export default PartnerProfilePage;
