import { Users, Building2, Banknote } from "lucide-react";
import "./StatsSection.css";

function StatsSection() {
  const stats = [
    {
      icon: <Users size={32} />,
      number: "12 450",
      label: "TALIBÉS ACCOMPAGNÉS",
    },
    {
      icon: <Building2 size={32} />,
      number: "342",
      label: "DAARAS PARTENAIRES",
    },
    {
      icon: <Banknote size={32} />,
      number: "85.4M FCFA",
      label: "FONDS DISTRIBUÉS",
    },
  ];

  return (
    <section className="stats">
      <div className="stats__container">
        {stats.map((stat, index) => (
          <div key={index} className="stats__item">
            <div className="stats__icon">{stat.icon}</div>
            <span className="stats__number">{stat.number}</span>
            <span className="stats__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
