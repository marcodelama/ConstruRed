import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, PageNotFound } from "../Views";
import { appConfig } from "./Config.Routes";

export const App = () => {
  return (
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
  );
};
