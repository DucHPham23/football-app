import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [role, setRole] = useState("USER");

  const value = useMemo(
    () => ({
      role,
      loginAsUser: () => setRole("USER"),
      loginAsOwner: () => setRole("OWNER"),
      loginAsAdmin: () => setRole("ADMIN"),
      logout: () => setRole("USER"),
    }),
    [role]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
