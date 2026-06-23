import { createContext, useState } from "react";

export const AuthContext =
  createContext();

export const AuthProvider = ({
  children,
}) => {
  const [user, setUser] = useState(
    JSON.parse(
      localStorage.getItem("user")
    ) || null
  );

  const login = (
    token,
    student
  ) => {
    localStorage.setItem(
      "token",
      token
    );

    localStorage.setItem(
      "user",
      JSON.stringify(student)
    );

    setUser(student);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};