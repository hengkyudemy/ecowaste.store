import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function ProtectedRoute({ children }) {
  const { authedUser, initializing } = useContext(AuthContext);

  if (initializing) {
    return <p>Loading...</p>;
  }

  if (!authedUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
