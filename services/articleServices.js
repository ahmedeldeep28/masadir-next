import { api } from "../lib/axios";

export const getArticles = async (params = {}) => {
  return await api.get("/articles", { params });
};

export const getLatestArticles = async () => {
  return await api.get("/articles", {
    params: {
      sort: ["title:asc"],
      pagination: {
        limit: 2,
      },
      populate: "*",
    },
  });
};

export const getArticleBySlug = async (slug) => {
  const res = await api.get("/articles", {
    params: {
      filters: {
        slug: { $eq: slug },
      },
      populate: "*",
    },
  });

  return res.data[0];
};

export const getArticlesByCategory = async (categoryName) => {
  return await api.get("/articles", {
    params: {
      filters: {
        category: { name: { $eq: categoryName } },
      },
      populate: "*",
    },
  });
};
