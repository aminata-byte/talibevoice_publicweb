import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import contactService from "../services/contactService";
import "./ContactPage.css";

function ContactPage() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    sujet: "Donation",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      await contactService.send(form);
      alert(
        "Message envoyé ! Nous vous répondrons dans les plus brefs délais.",
      );
      setForm({ nom: "", email: "", sujet: "Donation", message: "" });
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Impossible d'envoyer le message. Réessayez.",
      );
    } finally {
      setLoading(false);
    }
  };

  const infos = [
    { icon: <MapPin size={20} />, titre: "Adresse", valeur: "Dakar, Sénégal" },
    {
      icon: <Phone size={20} />,
      titre: "Téléphone",
      valeur: "+221 33 000 00 00",
    },
    {
      icon: <Mail size={20} />,
      titre: "Email",
      valeur: "contact@talibevoice.sn",
    },
    {
      icon: <Clock size={20} />,
      titre: "Horaires",
      valeur: "Lundi - Vendredi : 8h - 18h",
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="contact">
        <div className="contact__container">
          {/* Header */}
          <div className="contact__header">
            <h1 className="contact__title">Contactez-nous</h1>
            <p className="contact__subtitle">Nous sommes là pour vous aider</p>
          </div>

          <div className="contact__grid">
            {/* Formulaire */}
            <div className="contact__form-container">
              <div className="contact__form">
                <div className="contact__form-group">
                  <label className="contact__label">Nom complet</label>
                  <input
                    type="text"
                    name="nom"
                    placeholder="Votre nom complet"
                    value={form.nom}
                    onChange={handleForm}
                    className="contact__input"
                  />
                </div>

                <div className="contact__form-group">
                  <label className="contact__label">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="votre@email.com"
                    value={form.email}
                    onChange={handleForm}
                    className="contact__input"
                  />
                </div>

                <div className="contact__form-group">
                  <label className="contact__label">Sujet</label>
                  <select
                    name="sujet"
                    value={form.sujet}
                    onChange={handleForm}
                    className="contact__input"
                  >
                    <option>Donation</option>
                    <option>Partenariat</option>
                    <option>Recensement</option>
                    <option>Signalement</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div className="contact__form-group">
                  <label className="contact__label">Message</label>
                  <textarea
                    name="message"
                    placeholder="Comment pouvons-nous vous aider ?"
                    value={form.message}
                    onChange={handleForm}
                    className="contact__input contact__textarea"
                    rows={5}
                  />
                </div>

                {error && (
                  <p style={{ color: "var(--tertiary)", fontSize: "14px" }}>
                    {error}
                  </p>
                )}

                <button
                  className="contact__submit"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? "Envoi..." : "Envoyer le message"}
                </button>
              </div>
            </div>

            {/* Infos contact */}
            <div className="contact__infos">
              <div className="contact__infos-list">
                {infos.map((info, index) => (
                  <div key={index} className="contact__info-item">
                    <div className="contact__info-icon">{info.icon}</div>
                    <div>
                      <p className="contact__info-titre">{info.titre}</p>
                      <p className="contact__info-valeur">{info.valeur}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Image */}
              <div className="contact__image-container">
                <img
                  src="/src/assets/contact-image.jpg"
                  alt="Dakar"
                  className="contact__image"
                />
                <div className="contact__image-overlay">
                  <p>Retrouvez-nous à Dakar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ContactPage;
