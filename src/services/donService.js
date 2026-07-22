import api from "./api";

const donService = {
  submitFinancier: async (donData) => {
    const response = await api.post("/dons", {
      type: "financier",
      montant: donData.montant,
      mode_paiement: donData.paiement,
      nom: donData.nom || null,
      prenom: donData.prenom || null,
      email: donData.email || null,
      telephone: donData.telephone || null,
      anonyme: donData.anonyme,
    });
    return response.data;
  },

  submitMateriel: async (donData) => {
    const response = await api.post("/dons", {
      type: "materiel",
      items: donData.items,
      nom: donData.nom || null,
      prenom: donData.prenom || null,
      email: donData.email || null,
      telephone: donData.telephone || null,
      anonyme: donData.anonyme,
    });
    return response.data;
  },

  getStats: async () => {
    const response = await api.get("/dons/stats");
    return response.data;
  },

  getStatut: async (reference) => {
    const response = await api.get(`/dons/statut/${reference}`);
    return response.data;
  },
};

export default donService;
