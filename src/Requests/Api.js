import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://localhost:5000/api/auth', // ✅ Base path only
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor

Api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
Api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken'); // Optional: clear token on 401
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default Api;
