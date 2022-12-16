import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
