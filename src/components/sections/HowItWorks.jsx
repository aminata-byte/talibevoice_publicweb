import "./HowItWorks.css";

function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: "🗺️",
      title: "Recensement",
      description:
        "Les agents de terrain recensent les talibés et cartographient les daaras par zone géographique.",
    },
    {
      number: "2",
      icon: "🤝",
      title: "Collecte des dons",
      description:
        "Les donateurs contribuent via la plateforme. Chaque don est validé et tracé de manière transparente.",
    },
    {
      number: "3",
      icon: "📦",
      title: "Redistribution",
      description:
        "Les ressources sont redistribuées équitablement selon les besoins identifiés dans chaque daara.",
    },
  ];

  return (
    <section className="howitworks">
      <div className="howitworks__container">
        <h2 className="howitworks__title">Comment ça fonctionne ?</h2>
        <p className="howitworks__subtitle">
          Un processus simple et transparent en 3 étapes
        </p>

        <div className="howitworks__steps">
          {steps.map((step, index) => (
            <div key={index} className="howitworks__step">
              <div className="howitworks__icon">{step.icon}</div>
              <div className="howitworks__number">{step.number}</div>
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
