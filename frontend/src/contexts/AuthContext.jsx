import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const isAuthenticated = !!user;

  const login = useCallback((userData) => {
    console.log("User data:", userData);
    setUser(userData.user);
    localStorage.setItem("user", JSON.stringify(userData.user));
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("user");
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
