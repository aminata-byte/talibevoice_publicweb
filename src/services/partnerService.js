import api from "./api";

const partnerService = {
  login: async (code) => {
    const response = await api.post("/partenaires/login", {
      code_partenaire: code,
    });
    return response.data;
  },

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

  getProfil: async () => {
    const response = await api.get("/partenaires/profil");
    return response.data;
  },

  updateProfil: async (data) => {
    const response = await api.put("/partenaires/profil", data);
    return response.data;
  },

  getOffres: async () => {
    const response = await api.get("/partenaires/offres");
    return response.data;
  },

  submitOffre: async (data) => {
    const response = await api.post("/partenaires/offres", data);
    return response.data;
  },

  getTalibesInscrits: async () => {
    const response = await api.get("/partenaires/talibes-inscrits");
    return response.data;
  },

  getImpact: async () => {
    const response = await api.get("/partenaires/impact");
    return response.data;
  },
};

export default partnerService;
