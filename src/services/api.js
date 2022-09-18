import axios from "axios";

const api = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

const commentApi = {
  get: () => api.get("/comments"),
  post: ({ profile_url, author, content, createdAt }) =>
    api.post("/comments", { profile_url, author, content, createdAt }),
  put: ({ profile_url, author, content, createdAt, id }) =>
    api.put(`/comments/${id}`, { profile_url, author, content, createdAt }),
  delte: (id) => api.delete(`/comments/${id}`),
};

export default commentApi;
