import { api } from "../lib/axios";

export const getCategories = async (params = {}) => {
  return await api.get("/categories", { params });
};

export const getCategoryBySlug = async (slug) => {
  const params = {
    filters: {
      slug: { $eq: slug },
    },
    populate: "*",
  };
  const res = await api.get("/categories", { params });
  return res.data[0];
};
