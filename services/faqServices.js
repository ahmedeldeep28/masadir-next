import { api } from "../lib/axios";

export const getQuestions = async (params = {}) => {
  return await api.get("/faqs", { params });
};
