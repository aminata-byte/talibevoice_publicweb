import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./ConditionsPage.css";

function ConditionsPage() {
  const sections = [
    {
      numero: "1",
      titre: "Acceptation des conditions",
      texte:
        "En accédant et en utilisant la plateforme TalibeVoice, vous acceptez d'être lié par les présentes conditions d'utilisation. Si vous n'acceptez pas ces termes, veuillez cesser toute utilisation du service immédiatement. L'accès à nos services est conditionné par votre respect intégral de ces règles éthiques et légales.",
    },
    {
      numero: "2",
      titre: "Description du service",
      texte:
        "TalibeVoice est une plateforme de mise en relation et de soutien destinée aux daaras. Nous facilitons la collecte de dons, la visibilité des besoins éducatifs et sanitaires des enfants talibés, ainsi que la coordination entre les donateurs et les structures d'accueil partenaires.",
    },
    {
      numero: "3",
      titre: "Inscription et comptes",
      texte:
        "Pour bénéficier de certaines fonctionnalités, une inscription peut être requise. Vous vous engagez à fournir des informations exactes, à jour et complètes. La sécurité de vos identifiants relève de votre unique responsabilité. Toute activité suspecte doit nous être signalée sans délai.",
    },
    {
      numero: "4",
      titre: "Utilisation acceptable",
      texte:
        "L'utilisation de la plateforme pour diffuser des contenus haineux, discriminatoires ou frauduleux est strictement interdite. Tout utilisateur s'engage à respecter l'intégrité de la plateforme et la dignité des bénéficiaires finaux, notamment les mineurs.",
    },
    {
      numero: "5",
      titre: "Dons et redistributions",
      texte:
        "Les dons collectés via TalibeVoice sont destinés exclusivement aux besoins identifiés des daaras partenaires. Une commission de transparence peut être prélevée pour couvrir les frais de fonctionnement de la plateforme, le reste étant intégralement reversé selon les priorités affichées.",
    },
    {
      numero: "6",
      titre: "Responsabilités des partenaires",
      texte:
        "Les daaras et structures partenaires s'engagent à une transparence totale sur l'utilisation des fonds et des ressources reçus. Tout manquement aux principes de protection de l'enfance entraînera une radiation immédiate et d'éventuelles poursuites judiciaires.",
    },
    {
      numero: "7",
      titre: "Propriété intellectuelle",
      texte:
        "Le contenu, le logo, le design et les technologies de TalibeVoice sont la propriété exclusive de l'organisation. Toute reproduction, même partielle, sans autorisation écrite préalable, est interdite et passible de sanctions.",
    },
    {
      numero: "8",
      titre: "Modification des conditions",
      texte:
        "TalibeVoice se réserve le droit de modifier les présentes conditions à tout moment. Les utilisateurs seront informés des changements majeurs via la plateforme. La poursuite de l'utilisation après modification vaut acceptation tacite des nouveaux termes.",
    },
    {
      numero: "9",
      titre: "Contact",
      texte:
        "Pour toute question relative à ces conditions ou pour signaler un abus, vous pouvez nous contacter via l'adresse e-mail :",
      contact: "legal@talibevoice.sn",
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="conditions">
        <div className="conditions__container">
          {/* Header */}
          <div className="conditions__header">
            <h1 className="conditions__title">Conditions d'utilisation</h1>
            <p className="conditions__date">
              Dernière mise à jour : Janvier 2025
            </p>
          </div>

          {/* Sections */}
          <div className="conditions__sections">
            {sections.map((section, index) => (
              <div key={index} className="conditions__section">
                <h2 className="conditions__section-title">
                  {section.numero}. {section.titre}
                </h2>
                <p className="conditions__section-text">{section.texte}</p>
                {section.contact && (
                  <div className="conditions__contact">
                    <a
                      href={`mailto:${section.contact}`}
                      className="conditions__contact-link"
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

export default ConditionsPage;
