import React, { createContext, useState, useEffect } from 'react';
import { getUserLogged, putAccessToken } from '../utils/network-data';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const { error, data } = await getUserLogged();
      if (!error) {
        setAuthUser(data);
      }
      setInitializing(false);
    };

    fetchUser();
  }, []);

  const loginSuccess = async (accessToken) => {
    putAccessToken(accessToken);
    const { error, data } = await getUserLogged();
    if (!error) {
      setAuthUser(data);
    }
  };

  const logout = () => {
    putAccessToken('');
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, loginSuccess, logout, initializing }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
