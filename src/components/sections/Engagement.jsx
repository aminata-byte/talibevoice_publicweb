import { UserSearch, Shield, GraduationCap } from "lucide-react";
import "./Engagement.css";

function Engagement() {
  const cards = [
    {
      icon: <UserSearch size={28} />,
      title: "Recensement",
      description:
        "Identification biométrique et numérique de chaque talibé pour garantir leur existence légale et leur suivi sanitaire.",
    },
    {
      icon: <Shield size={28} />,
      title: "Protection",
      description:
        "Mise en place d'un réseau de veille sociale et d'accès aux soins d'urgence pour prévenir toute forme d'abus ou de négligence.",
      active: true,
    },
    {
      icon: <GraduationCap size={28} />,
      title: "Professionnalisation",
      description:
        "Transition vers des formations techniques et professionnelles adaptées au marché de l'emploi sénégalais.",
    },
  ];

  return (
    <section className="engagement">
      <div className="engagement__container">
        <h2 className="engagement__title">Notre Engagement</h2>
        <p className="engagement__subtitle">
          Une approche holistique pour assurer la dignité et l'avenir de chaque
          enfant.
        </p>

        <div className="engagement__cards">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`engagement__card ${card.active ? "engagement__card--active" : ""}`}
            >
              <div className="engagement__card-icon">{card.icon}</div>
              <h3 className="engagement__card-title">{card.title}</h3>
              <p className="engagement__card-description">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Engagement;
