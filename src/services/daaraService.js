import api from "./api";

const daaraService = {
  // Récupérer tous les daaras
  getAll: async (params = {}) => {
    const response = await api.get("/daaras", { params });
    return response.data;
  },

  // Récupérer un daara par ID
  getById: async (id) => {
    const response = await api.get(`/daaras/${id}`);
    return response.data;
  },

  // Récupérer les besoins d'un daara
  getBesoins: async (id) => {
    const response = await api.get(`/daaras/${id}/besoins`);
    return response.data;
  },

  // Récupérer les daaras par région
  getByRegion: async (region) => {
    const response = await api.get("/daaras", { params: { region } });
    return response.data;
  },

  // Rechercher un daara
  search: async (query) => {
    const response = await api.get("/daaras", { params: { search: query } });
    return response.data;
  },
};

export default daaraService;
