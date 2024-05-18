import { useEffect, useState } from "react";
import { backgroundAsideNegro } from "../Css/Generales";
import { ConfigContext } from "../Context/ConfigContext";

export const ConfigProvider = ({ children }) => {
  // Estado del navbar
  const [isNavbarFixed, setIsNavbarFixed] = useState(true);
  // Estado del background del aside
  const [backgroundAside, setBackgroundAside] = useState(backgroundAsideNegro);

  // Cargamos las configuraciones desde localStorage al inicio
  useEffect(() => {
    const storedConfig = JSON.parse(localStorage.getItem("appConfig"));
    if (storedConfig) {
      setIsNavbarFixed(storedConfig.isNavbarFixed);
      setBackgroundAside(storedConfig.backgroundAside);
    }
  }, []);

  // Guardamos las configuraciones en localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem(
      "appConfig",
      JSON.stringify({
        isNavbarFixed,
        backgroundAside,
      })
    );
  }, [isNavbarFixed, backgroundAside]);

  return (
    <ConfigContext.Provider
      value={{
        isNavbarFixed,
        setIsNavbarFixed,
        backgroundAside,
        setBackgroundAside,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};
