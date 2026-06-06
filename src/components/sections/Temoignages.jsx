import { Quote } from "lucide-react";
import "./Temoignages.css";

function Temoignages() {
  const temoignages = [
    {
      texte:
        "Grâce à TalibeVoice, nous avons pu équiper notre daara d'un réfectoire moderne. La transparence de la plateforme rassure nos donateurs locaux et internationaux.",
      nom: "Mamadou Ndiaye",
      role: "Directeur de Daara, Touba",
      initiales: "MN",
    },
    {
      texte:
        "Le système d'identification numérique a radicalement changé notre façon d'intervenir. Nous savons exactement qui a besoin de quoi et quand.",
      nom: "Saliou Diallo",
      role: "Coordinateur de Programme",
      initiales: "SD",
    },
  ];

  return (
    <section className="temoignages">
      <div className="temoignages__container">
        <h2 className="temoignages__title">Ils nous font confiance</h2>

        <div className="temoignages__grid">
          {temoignages.map((t, index) => (
            <div key={index} className="temoignage__card">
              <Quote size={32} className="temoignage__quote-icon" />
              <p className="temoignage__texte">"{t.texte}"</p>
              <div className="temoignage__author">
                <div className="temoignage__avatar">{t.initiales}</div>
                <div>
                  <p className="temoignage__nom">{t.nom}</p>
                  <p className="temoignage__role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Temoignages;
