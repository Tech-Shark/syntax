import { createContext, useContext } from "react";
import { useAuthClient } from "../utils/authClientUtils";

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const auth = useAuthClient();

  return (
    <AuthenticationContext.Provider value={auth}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuth = () => useContext(AuthenticationContext);
