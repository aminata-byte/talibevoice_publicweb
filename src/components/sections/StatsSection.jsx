import "./StatsSection.css";

function StatsSection() {
  const stats = [
    { number: "2 847", label: "Talibés recensés" },
    { number: "312", label: "Daaras cartographiés" },
    { number: "4.2M FCFA", label: "Dons redistribués" },
  ];

  return (
    <section className="stats">
      <div className="stats__container">
        {stats.map((stat, index) => (
          <div key={index} className="stats__item">
            <span className="stats__number">{stat.number}</span>
            <span className="stats__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
