import React from "react";
import { useAuthContext } from "../../context/AuthContext";

export const PrivateComponent = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuthContext();

  return user ? children : <div></div>;
};
