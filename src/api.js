import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:4000" });

const commentApi = {
  get: () => api.get("/comments"),
  post: ({ profile_url, author, content, createdAt }) =>
    api.post("/comments", { profile_url, author, content, createdAt }),
  put: ({ profile, writer, message, date, id }) =>
    api.post(`/comments/${id}`, { profile, writer, message, date }),
  delte: (id) => api.delete(`/comments/${id}`),
};

export default commentApi;
