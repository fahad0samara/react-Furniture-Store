import axios from 'axios';
import { useAuthStore } from '../store/useAuthStore';
import { refreshAccessToken } from '../services/auth';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = useAuthStore.getState().refreshToken;

      if (refreshToken) {
        try {
          const { token } = await refreshAccessToken(refreshToken);
          useAuthStore.getState().setTokens(token, refreshToken);
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return api(originalRequest);
        } catch (refreshError) {
          useAuthStore.getState().logout();
          throw refreshError;
        }
      }
    }

    return Promise.reject(error);
  }
);

export default api;