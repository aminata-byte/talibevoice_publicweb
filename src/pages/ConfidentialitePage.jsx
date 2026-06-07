import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./ConfidentialitePage.css";

function ConfidentialitePage() {
  const sections = [
    {
      numero: "1",
      titre: "Collecte des données",
      texte:
        "Nous collectons les noms, adresses e-mail et localisations géographiques pour les agents de recensement afin d'assurer la précision de nos actions. Pour les talibés, seules les données strictement nécessaires à leur identification et suivi sont recueillies.",
    },
    {
      numero: "2",
      titre: "Utilisation des données",
      texte:
        "Les données sont exclusivement utilisées pour le suivi de l'impact social, la gestion transparente des dons et l'amélioration continue des programmes d'insertion professionnelle pour les jeunes talibés.",
    },
    {
      numero: "3",
      titre: "Protection des données",
      texte:
        "Toutes les informations transmises via notre plateforme sont chiffrées selon les standards de sécurité les plus élevés et hébergées sur des serveurs sécurisés pour prévenir tout accès non autorisé.",
      image: "/src/assets/security-image.jpg",
    },
    {
      numero: "4",
      titre: "Données des donateurs",
      texte:
        "Les donateurs ont la possibilité de choisir l'anonymat complet. Dans ce cas, leur identité n'est jamais rendue publique et reste confinée aux processus de vérification interne nécessaires à la gestion comptable.",
    },
    {
      numero: "5",
      titre: "Droits des utilisateurs",
      texte:
        "Conformément aux réglementations sur la protection des données personnelles, vous disposez d'un droit permanent d'accès, de rectification ou de suppression des données vous concernant.",
    },
    {
      numero: "6",
      titre: "Contact",
      texte:
        "Pour toute question relative à notre politique de confidentialité, veuillez nous contacter à l'adresse suivante :",
      contact: "contact@talibevoice.sn",
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="confidentialite">
        <div className="confidentialite__container">
          {/* Header */}
          <div className="confidentialite__header">
            <h1 className="confidentialite__title">
              Politique de confidentialité
            </h1>
            <p className="confidentialite__date">
              Dernière mise à jour : Janvier 2025
            </p>
          </div>

          {/* Sections */}
          <div className="confidentialite__sections">
            {sections.map((section, index) => (
              <div key={index} className="confidentialite__section">
                <h2 className="confidentialite__section-title">
                  {section.numero}. {section.titre}
                </h2>
                <p className="confidentialite__section-text">{section.texte}</p>
                {section.image && (
                  <img
                    src={section.image}
                    alt={section.titre}
                    className="confidentialite__section-image"
                  />
                )}
                {section.contact && (
                  <div className="confidentialite__contact">
                    <a
                      href={`mailto:${section.contact}`}
                      className="confidentialite__contact-link"
                    >
                      ✉ {section.contact}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ConfidentialitePage;
