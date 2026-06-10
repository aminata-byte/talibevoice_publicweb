import api from "./api";

const partnerService = {
  // Connexion partenaire avec code
  login: async (code) => {
    const response = await api.post("/partenaires/login", {
      code_partenaire: code,
    });
    return response.data;
  },

  // Devenir partenaire (candidature)
  register: async (data) => {
    const response = await api.post("/partenaires/candidature", {
      nom: data.organisation,
      domaine: data.domaine,
      nom_contact: data.contact,
      email: data.email,
      telephone: data.telephone,
      message_motivation: data.motivation,
    });
    return response.data;
  },

  // Récupérer le profil partenaire
  getProfil: async () => {
    const response = await api.get("/partenaires/profil");
    return response.data;
  },

  // Mettre à jour le profil
  updateProfil: async (data) => {
    const response = await api.put("/partenaires/profil", data);
    return response.data;
  },

  // Récupérer les offres du partenaire
  getOffres: async () => {
    const response = await api.get("/partenaires/offres");
    return response.data;
  },

  // Soumettre une offre
  submitOffre: async (data) => {
    const response = await api.post("/partenaires/offres", data);
    return response.data;
  },

  // Récupérer les talibés inscrits
  getTalibesInscrits: async () => {
    const response = await api.get("/partenaires/talibes-inscrits");
    return response.data;
  },

  // Récupérer les stats d'impact
  getImpact: async () => {
    const response = await api.get("/partenaires/impact");
    return response.data;
  },
};

export default partnerService;
