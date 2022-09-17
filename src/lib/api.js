import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  withCredentials: true,
});

export const commentApi = {
  getAllComments: () => axiosInstance.get("/comments"),
  getCommentById: (commentId) => axiosInstance.get(`/comments/${commentId}`),
  postComment: (bodyData) => axiosInstance.post("/comments", bodyData),
  updateComment: (commentId, bodyData) =>
    axiosInstance.put(`/comments/${commentId}`, bodyData),
  deleteComment: (commentId) => axiosInstance.delete(`/comments/${commentId}`),
};
