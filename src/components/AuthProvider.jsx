import React from "react";
import { useState } from "react";

export const AuthContext = React.createContext(false);

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Stub method for login feature
  const login = () => {
    setIsLoggedIn(true);
  };

  // Stub method for logout feature
  const logout = () => {
    setIsLoggedIn(false);
  };

  const context = {
    isLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
