import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, PageNotFound } from "../Views";
import { appConfig } from "./Config.Routes";
import { ThemeProvider } from "@material-tailwind/react";

export const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Ruta del Login */}
          <Route path="/logIn" element={<Login />} />

          {/* Ruta de las rutas protegidas */}
          {appConfig.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}

          {/* Rutas que no existan */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
