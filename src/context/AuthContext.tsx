import { createContext, useMemo, useContext, useState } from "react";
import type { LoginData } from "../@types/LoginData";
import { useMutation } from "@tanstack/react-query";
import type { ResponseErrorData } from "../@types/RequestErrorData";
import { useErrorContext } from "./ErrorContext";
import { useRouter } from "next/router";
import { ENDPOINTS } from "../services/endpoints";
import type { UserData } from "../@types/UserData";
import { ROUTES } from "../constants/routes";

export interface AuthContextProps {
  user: UserData | null;
  handleLogin: (data: LoginData) => void;
  isLoading: boolean;
  setUser: React.Dispatch<React.SetStateAction<UserData | null>>;
  handleLogout: () => void;
  isUserAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const [user, setUser] = useState<UserData | null>(null);

  const { setError } = useErrorContext();

  const handleLogout = () => {
    setUser(null);
    router.push(ROUTES.login);
  };

  const { isLoading, mutate } = useMutation({
    mutationFn: async (loginData: LoginData) => {
      const response = await ENDPOINTS.login(loginData);
      return response.data;
    },
    onError: (error: ResponseErrorData) => {
      setError(`${error.name}: ${error.message}`);
    },
    onSuccess: (userData) => {
      setUser(userData);
      router.push(ROUTES.dashboard);
    },
  });

  const handleLogin = (loginData: LoginData) => {
    mutate(loginData);
  };

  const isUserAuthenticated = useMemo(() => {
    return !!user;
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        handleLogin,
        isLoading,
        setUser,
        handleLogout,
        isUserAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
