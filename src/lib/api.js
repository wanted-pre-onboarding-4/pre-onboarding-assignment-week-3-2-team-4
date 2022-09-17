import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  withCredentials: true,
});

export const commentApi = {
  getAllComments: () => axiosInstance.get("/comments"),
  postComment: (bodyData) => axiosInstance.post("/comments", bodyData),
  updateComment: (commentId, bodyData) =>
    axiosInstance.put(`/comments/${commentId}`, bodyData),
  deleteComent: (commentId) => axiosInstance.delete(`/comments/${commentId}`),
};
