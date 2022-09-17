import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const commentApi = {
  getList: () => api.get(),
  deleteComment: (comment_id) => api.delete(`/${comment_id}`),
  postComment: (config) => api.post("", config),
  putComment: (comment_id, config) => api.put(`/${comment_id}`, config),
};
