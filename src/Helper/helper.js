// utils/AuthWrapper.js or similar

import { Navigate } from 'react-router-dom';

// authUtils.js
export const isAuthenticated = () => {
    const token = localStorage.getItem('authToken');
    return !!token; // True if token exists
  };
  
// Route guards
export const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export const PublicRoute = ({ children }) => {
  return isAuthenticated() ? <Navigate to="/dashboard" /> : children;
};
