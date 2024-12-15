import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://veocab-project.vercel.app/api/v1",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor for adding authorization token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for global error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
