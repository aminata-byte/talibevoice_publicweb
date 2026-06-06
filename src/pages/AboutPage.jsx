import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
  Eye,
  Heart,
  Lightbulb,
  Scale,
  Shield,
  Users,
  Handshake,
  Banknote,
} from "lucide-react";
import "./AboutPage.css";

function AboutPage() {
  const valeurs = [
    { icon: <Eye size={28} />, title: "Transparence" },
    { icon: <Heart size={28} />, title: "Solidarité" },
    { icon: <Lightbulb size={28} />, title: "Innovation" },
    { icon: <Scale size={28} />, title: "Équité" },
  ];

  const acteurs = [
    {
      icon: <Shield size={24} />,
      title: "Administrateur",
      description: "Garant de l'intégrité de la plateforme.",
    },
    {
      icon: <Users size={24} />,
      title: "Agent de Terrain",
      description: "Au contact direct pour le recensement.",
    },
    {
      icon: <Handshake size={24} />,
      title: "Partenaire",
      description: "ONG et institutions locales engagées.",
    },
    {
      icon: <Banknote size={24} />,
      title: "Donateur",
      description: "Le moteur financier du projet.",
    },
  ];

  return (
    <div>
      <Navbar />

      {/* Hero */}
      <div className="about__hero">
        <div className="about__hero-container">
          <h1 className="about__hero-title">À propos de TalibeVoice</h1>
          <p className="about__hero-subtitle">
            Notre mission, notre vision, notre équipe
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="about__image-container">
        <img
          src="/src/assets/about-image.jpg"
          alt="Talibés"
          className="about__image"
        />
      </div>

      <div className="about__content">
        <div className="about__container">
          {/* Mission */}
          <div className="about__mission">
            <div className="about__mission-header">
              <div className="about__mission-icon">
                <Users size={28} />
              </div>
              <h2 className="about__mission-title">Notre mission</h2>
            </div>
            <p className="about__mission-text">
              TalibeVoice est une plateforme dédiée à la protection et à
              l'épanouissement des enfants talibés au Sénégal. Nous œuvrons pour
              un recensement exhaustif, la facilitation des dons transparents et
              l'insertion professionnelle.
            </p>
            <div className="about__mission-badge">
              <Users size={20} />
              <span>TECHNOLOGIE AU SERVICE DE L'HUMANITÉ</span>
            </div>
          </div>

          {/* Citation */}
          <div className="about__citation">
            <span className="about__citation-icon">"</span>
            <blockquote className="about__citation-text">
              Un Sénégal où chaque talibé est recensé, accompagné et inséré dans
              la société
            </blockquote>
          </div>

          {/* Valeurs */}
          <div className="about__valeurs">
            <h2 className="about__section-title">Nos valeurs</h2>
            <div className="about__valeurs-grid">
              {valeurs.map((v, index) => (
                <div key={index} className="about__valeur-card">
                  <div className="about__valeur-icon">{v.icon}</div>
                  <h3 className="about__valeur-title">{v.title}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Acteurs */}
          <div className="about__acteurs">
            <h2 className="about__section-title">Les acteurs du changement</h2>
            <div className="about__acteurs-list">
              {acteurs.map((a, index) => (
                <div key={index} className="about__acteur-card">
                  <div className="about__acteur-icon">{a.icon}</div>
                  <div className="about__acteur-content">
                    <h3 className="about__acteur-title">{a.title}</h3>
                    <p className="about__acteur-description">{a.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutPage;
