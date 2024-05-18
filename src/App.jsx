import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Views";
import { ProtectedRoutes } from "./Routers/Protected.Routes";
import { appConfig } from "./Routers/Config.Routes";
import { PageNotFound } from "./Views/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Ruta del Login */}
          <Route path="/signin" element={<Login />} />

          {/* Ruta de las rutas protegidas */}
          {appConfig.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}

          {/* Rutas que no existan */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
