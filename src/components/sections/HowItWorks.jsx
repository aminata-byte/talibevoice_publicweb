import {
  ClipboardList,
  Fingerprint,
  HandCoins,
  TrendingUp,
} from "lucide-react";
import "./HowItWorks.css";

function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: <ClipboardList size={24} />,
      title: "Recensement",
      description:
        "Audit complet des besoins structurels et humains de la daara.",
    },
    {
      number: "2",
      icon: <Fingerprint size={24} />,
      title: "Identification",
      description: "Création du profil numérique sécurisé pour chaque enfant.",
    },
    {
      number: "3",
      icon: <HandCoins size={24} />,
      title: "Collecte",
      description: "Canalisation des dons via notre plateforme transparente.",
    },
    {
      number: "4",
      icon: <TrendingUp size={24} />,
      title: "Impact",
      description: "Rapports d'utilisation des fonds et suivi des progrès.",
    },
  ];

  return (
    <section className="howitworks">
      <div className="howitworks__container">
        <div className="howitworks__header">
          <h2 className="howitworks__title">Comment ça marche ?</h2>
          <div className="howitworks__line"></div>
        </div>

        <div className="howitworks__steps">
          {steps.map((step, index) => (
            <div key={index} className="howitworks__step">
              <div className="howitworks__step-icon">
                <div className="howitworks__step-number">{step.number}</div>
                <div className="howitworks__icon">{step.icon}</div>
              </div>
              <h3 className="howitworks__step-title">{step.title}</h3>
              <p className="howitworks__step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
