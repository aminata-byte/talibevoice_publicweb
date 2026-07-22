import api from "./api";

const contactService = {
  send: async (data) => {
    const response = await api.post("/contact", data);
    return response.data;
  },
};

export default contactService;
