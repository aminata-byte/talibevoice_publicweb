import { useState, useEffect } from "react";
import { Users, Building2, Banknote } from "lucide-react";
import api from "../../services/api";
import "./StatsSection.css";

const formatMontant = (montant) => {
  if (!montant) return "0 FCFA";
  if (montant >= 1000000) return `${(montant / 1000000).toFixed(1)}M FCFA`;
  if (montant >= 1000) return `${(montant / 1000).toFixed(0)}K FCFA`;
  return `${Number(montant).toLocaleString()} FCFA`;
};

function StatsSection() {
  const [stats, setStats] = useState({
    total_talibes: null,
    total_daaras: null,
    total_dons: null,
  });

  useEffect(() => {
    api
      .get("/stats")
      .then((res) => setStats(res.data))
      .catch((err) => console.error(err));
  }, []);

  const items = [
    {
      icon: <Users size={32} />,
      number:
        stats.total_talibes !== null
          ? stats.total_talibes.toLocaleString()
          : "...",
      label: "TALIBÉS ACCOMPAGNÉS",
    },
    {
      icon: <Building2 size={32} />,
      number:
        stats.total_daaras !== null
          ? stats.total_daaras.toLocaleString()
          : "...",
      label: "DAARAS PARTENAIRES",
    },
    {
      icon: <Banknote size={32} />,
      number:
        stats.total_dons !== null ? formatMontant(stats.total_dons) : "...",
      label: "FONDS DISTRIBUÉS",
    },
  ];

  return (
    <section className="stats">
      <div className="stats__container">
        {items.map((stat, index) => (
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
