import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { dummyUser } from "../data/dummyData";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Auto-login with dummy user for boilerplate
    setUser(dummyUser);
  }, [setUser]);

  const login = async (email, password) => {
    // UI-only login (no API call)
    setUser(dummyUser);
    return { success: true };
  };

  const register = async (name, email, password) => {
    // UI-only register (no API call
    setUser({ ...dummyUser, name });
    return { success: true };
  };

  const logout = () => {
    // Just clear user (no API call)
    setUser(null);
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
