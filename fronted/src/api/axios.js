// src/api.js
import axios from "axios";

// Create Axios instance
const api = axios.create({
  baseURL: "http://localhost:8000/api", // Backend base URL
  withCredentials: true, // send cookies automatically
});

// Request interceptor: attach access token from localStorage
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Optional: Response interceptor for global error handling (e.g., token refresh)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // TODO: call refresh token endpoint and retry request if needed
      console.warn("Unauthorized! You might need to refresh the token.");
    }
    return Promise.reject(error);
  }
);

export default api;
