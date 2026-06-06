import { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./FAQ.css";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Comment la sécurité des dons est-elle garantie ?",
      reponse:
        "Nous utilisons des protocoles de cryptage de bout en bout et un système de tracking basé sur la blockchain pour assurer que chaque franc versé arrive directement au destinataire final.",
    },
    {
      question: "Comment sélectionnez-vous les daaras partenaires ?",
      reponse:
        "Chaque daara passe par un audit rigoureux de trois mois évaluant les conditions sanitaires, pédagogiques et la volonté de réforme de la direction.",
    },
    {
      question: "Puis-je parrainer un enfant spécifique ?",
      reponse:
        'Oui, notre option "Parrainage Direct" vous permet de suivre le parcours scolaire et médical d\'un enfant en particulier avec des nouvelles régulières.',
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq__container">
        <h2 className="faq__title">Foire aux questions</h2>

        <div className="faq__list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq__item ${openIndex === index ? "faq__item--open" : ""}`}
            >
              <button className="faq__question" onClick={() => toggle(index)}>
                <span>{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`faq__chevron ${openIndex === index ? "faq__chevron--open" : ""}`}
                />
              </button>
              {openIndex === index && (
                <div className="faq__reponse">
                  <p>{faq.reponse}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
