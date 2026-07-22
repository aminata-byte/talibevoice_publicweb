import api from "./api";

const donService = {
  // Soumettre un don financier
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

  // Soumettre un don matériel
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

  // Récupérer les statistiques des dons (public)
  getStats: async () => {
    const response = await api.get("/dons/stats");
    return response.data;
  },

  // Récupérer le statut d'un don via sa référence
  getStatut: async (reference) => {
    const response = await api.get(`/dons/statut/${reference}`);
    return response.data;
  },
};

export default donService;
