import { useContext } from "react";
import { ConfigContext } from "../Context/ConfigContext";

// Usamos el contexto creando un Hook
export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error("useConfig debe ser usado dentro de ConfigProvider");
  }
  return context;
};