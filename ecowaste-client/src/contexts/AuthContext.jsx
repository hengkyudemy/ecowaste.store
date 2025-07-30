import React, { createContext, useState, useEffect } from 'react';
import { getUserLogged, putAccessToken, getAccessToken } from '../utils/network-data';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const token = getAccessToken();
      if (token) {
        const { error, data } = await getUserLogged();
        if (!error) {
          setAuthedUser(data);
        } else {
          setAuthedUser(null);
          localStorage.removeItem('accessToken');
        }
      }
      setInitializing(false);
    };

    initAuth();
  }, []);

  const loginSuccess = async (token) => {
    putAccessToken(token);
    const { error, data } = await getUserLogged();
    if (!error) {
      setAuthedUser(data);
    }
  };

  const logout = () => {
    setAuthedUser(null);
    localStorage.removeItem('accessToken');
  };

  return (
    <AuthContext.Provider value={{ authedUser, initializing, loginSuccess, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;