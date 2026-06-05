import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./DonatePage.css";

function DonatePage() {
  const [typeDon, setTypeDon] = useState("financier");
  const [montant, setMontant] = useState(5000);
  const [autreMontant, setAutreMontant] = useState("");
  const [anonyme, setAnonyme] = useState(false);
  const [form, setForm] = useState({ nom: "", prenom: "", email: "" });

  const montants = [1000, 5000, 10000, 25000];

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const montantFinal = autreMontant || montant;
    alert(`Don de ${montantFinal} FCFA confirmé !`);
  };

  return (
    <div>
      <Navbar />
      <div className="donate">
        <div className="donate__container">
          <h1 className="donate__title">Faire un don</h1>

          {/* Toggle type de don */}
          <div className="donate__section">
            <label className="donate__label">Type de don</label>
            <div className="donate__toggle">
              <button
                className={`donate__toggle-btn ${typeDon === "financier" ? "active" : ""}`}
                onClick={() => setTypeDon("financier")}
              >
                Financier
              </button>
              <button
                className={`donate__toggle-btn ${typeDon === "materiel" ? "active" : ""}`}
                onClick={() => setTypeDon("materiel")}
              >
                Matériel
              </button>
            </div>
          </div>

          {/* Carte impact */}
          {typeDon === "financier" && (
            <div className="donate__impact">
              <span className="donate__impact-label">VOTRE IMPACT</span>
              <p className="donate__impact-text">
                {montant >= 5000
                  ? `${montant.toLocaleString()} FCFA = 1 kit scolaire complet`
                  : `${montant.toLocaleString()} FCFA = contribution partielle`}
              </p>
            </div>
          )}

          {/* Montants */}
          {typeDon === "financier" && (
            <div className="donate__section">
              <label className="donate__label">Montant du don</label>
              <div className="donate__amounts">
                {montants.map((m) => (
                  <button
                    key={m}
                    className={`donate__amount-btn ${montant === m && !autreMontant ? "active" : ""}`}
                    onClick={() => {
                      setMontant(m);
                      setAutreMontant("");
                    }}
                  >
                    {m.toLocaleString()}
                  </button>
                ))}
              </div>
              <div className="donate__custom">
                <input
                  type="number"
                  placeholder="Autre montant"
                  value={autreMontant}
                  onChange={(e) => setAutreMontant(e.target.value)}
                  className="donate__input"
                />
                <span className="donate__currency">FCFA</span>
              </div>
            </div>
          )}

          {/* Formulaire facultatif */}
          <div className="donate__section">
            <label className="donate__label">
              Informations du donateur (facultatif)
            </label>
            <div className="donate__row">
              <input
                type="text"
                name="nom"
                placeholder="Ex: Diop"
                value={form.nom}
                onChange={handleForm}
                className="donate__input"
                disabled={anonyme}
              />
              <input
                type="text"
                name="prenom"
                placeholder="Ex: Amina"
                value={form.prenom}
                onChange={handleForm}
                className="donate__input"
                disabled={anonyme}
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="amina@email.com"
              value={form.email}
              onChange={handleForm}
              className="donate__input donate__input--full"
              disabled={anonyme}
            />
          </div>

          {/* Anonyme */}
          <div className="donate__anonymous">
            <input
              type="checkbox"
              id="anonyme"
              checked={anonyme}
              onChange={(e) => setAnonyme(e.target.checked)}
            />
            <label htmlFor="anonyme">Faire un don anonyme</label>
          </div>

          {/* Bouton confirmer */}
          <button className="donate__submit" onClick={handleSubmit}>
            🔒 Confirmer le don
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DonatePage;
