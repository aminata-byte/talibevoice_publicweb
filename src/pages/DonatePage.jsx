import { useState } from "react";
import { Lock, Plus, X } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import donService from "../services/donService";
import "./DonatePage.css";

const materiels = [
  "Riz",
  "Huile",
  "Sucre",
  "Farine",
  "Lait",
  "Vêtements",
  "Livres",
  "Fournitures scolaires",
  "Médicaments",
  "Autre",
];

function DonatePage() {
  const [typeDon, setTypeDon] = useState("financier");
  const [montant, setMontant] = useState(5000);
  const [autreMontant, setAutreMontant] = useState("");
  const [anonyme, setAnonyme] = useState(false);
  const [paiement, setPaiement] = useState("wave");
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
  });
  const [items, setItems] = useState([{ materiel: "", quantite: "" }]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const montants = [1000, 5000, 10000, 25000];

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { materiel: "", quantite: "" }]);
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      if (typeDon === "financier") {
        const montantFinal = Number(autreMontant || montant);
        const res = await donService.submitFinancier({
          montant: montantFinal,
          paiement,
          anonyme,
          nom: form.nom,
          prenom: form.prenom,
          email: form.email,
          telephone: form.telephone,
        });
        if (res.redirect_url) {
          window.location.href = res.redirect_url;
          return;
        }
      } else {
        await donService.submitMateriel({
          items,
          anonyme,
          nom: form.nom,
          prenom: form.prenom,
          email: form.email,
          telephone: form.telephone,
        });
        alert("Don matériel confirmé ! Merci pour votre générosité.");
      }
      setForm({ nom: "", prenom: "", email: "", telephone: "" });
      setItems([{ materiel: "", quantite: "" }]);
      setAutreMontant("");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Impossible d'enregistrer le don. Réessayez.",
      );
    } finally {
      setLoading(false);
    }
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

          {/* DON FINANCIER */}
          {typeDon === "financier" && (
            <>
              <div className="donate__impact">
                <span className="donate__impact-label">VOTRE IMPACT</span>
                <p className="donate__impact-text">
                  {montant >= 5000
                    ? `${(autreMontant || montant).toLocaleString()} FCFA = 1 kit scolaire complet`
                    : `${(autreMontant || montant).toLocaleString()} FCFA = contribution partielle`}
                </p>
              </div>

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

              <div className="donate__section">
                <label className="donate__label">Mode de paiement</label>
                <div className="donate__payment">
                  <button
                    className={`donate__payment-btn ${paiement === "wave" ? "active" : ""}`}
                    onClick={() => setPaiement("wave")}
                  >
                    <img
                      src="/src/assets/wave-logo.png"
                      alt="Wave"
                      className="donate__payment-logo"
                    />
                    <span>Wave</span>
                  </button>
                  <button
                    className={`donate__payment-btn ${paiement === "orange" ? "active" : ""}`}
                    onClick={() => setPaiement("orange")}
                  >
                    <img
                      src="/src/assets/orange-money-logo.png"
                      alt="Orange Money"
                      className="donate__payment-logo"
                    />
                    <span>Orange Money</span>
                  </button>
                </div>
              </div>

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
                <input
                  type="tel"
                  name="telephone"
                  placeholder="+221 7X XXX XX XX"
                  value={form.telephone}
                  onChange={handleForm}
                  className="donate__input donate__input--full"
                  disabled={anonyme}
                />
              </div>
            </>
          )}

          {/* DON MATERIEL */}
          {typeDon === "materiel" && (
            <div className="donate__section">
              <label className="donate__label">Détail du don matériel</label>
              <div className="donate__materiel-list">
                {items.map((item, index) => (
                  <div key={index} className="donate__materiel-item">
                    <select
                      value={
                        materiels.includes(item.materiel)
                          ? item.materiel
                          : item.materiel
                            ? "Autre"
                            : ""
                      }
                      onChange={(e) => {
                        if (e.target.value !== "Autre") {
                          handleItemChange(index, "materiel", e.target.value);
                        } else {
                          handleItemChange(index, "materiel", "");
                        }
                      }}
                      className="donate__input"
                    >
                      <option value="">Sélectionner un matériel</option>
                      {materiels.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>

                    {(!materiels.includes(item.materiel) ||
                      item.materiel === "") && (
                      <input
                        type="text"
                        placeholder="Précisez le matériel..."
                        value={
                          materiels.includes(item.materiel) ? "" : item.materiel
                        }
                        onChange={(e) =>
                          handleItemChange(index, "materiel", e.target.value)
                        }
                        className="donate__input"
                      />
                    )}
                    <input
                      type="number"
                      placeholder="Quantité (ex: 10 sacs)"
                      value={item.quantite}
                      onChange={(e) =>
                        handleItemChange(index, "quantite", e.target.value)
                      }
                      className="donate__input"
                    />
                    {items.length > 1 && (
                      <button
                        className="donate__remove-btn"
                        onClick={() => removeItem(index)}
                      >
                        <X size={16} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <button className="donate__add-btn" onClick={addItem}>
                <Plus size={16} />
                Ajouter un autre matériel
              </button>

              <div className="donate__section" style={{ marginTop: "1rem" }}>
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
                <input
                  type="tel"
                  name="telephone"
                  placeholder="+221 7X XXX XX XX"
                  value={form.telephone}
                  onChange={handleForm}
                  className="donate__input donate__input--full"
                  disabled={anonyme}
                />
              </div>
            </div>
          )}

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

          {error && (
            <p style={{ color: "var(--tertiary)", fontSize: "14px" }}>
              {error}
            </p>
          )}

          {/* Bouton confirmer */}
          <button
            className="donate__submit"
            onClick={handleSubmit}
            disabled={loading}
          >
            <Lock size={18} />
            {loading ? "Envoi en cours..." : "Confirmer le don"}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DonatePage;
