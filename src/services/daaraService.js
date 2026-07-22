import api from "./api";

const daaraService = {
  getAll: async (params = {}) => {
    const response = await api.get("/daaras", { params });
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/daaras/${id}`);
    return response.data;
  },

  getBesoins: async (id) => {
    const response = await api.get(`/daaras/${id}/besoins`);
    return response.data;
  },

  getByRegion: async (region) => {
    const response = await api.get("/daaras", { params: { region } });
    return response.data;
  },

  search: async (query) => {
    const response = await api.get("/daaras", { params: { search: query } });
    return response.data;
  },
};

export default daaraService;
