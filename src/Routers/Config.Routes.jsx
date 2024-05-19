import {
  Proyectos,
  Home,
  Empleados,
  Clientes,
  Proveedores,
  Pagos,
  Facturas,
  Documentos,
} from "../Views";

export const appConfig = [
  { path: "/", element: <Home /> },
  { path: "proyectos", element: <Proyectos /> },
  { path: "empleados", element: <Empleados /> },
  { path: "clientes", element: <Clientes /> },
  { path: "proveedores", element: <Proveedores /> },
  { path: "pagos", element: <Pagos /> },
  { path: "facturas", element: <Facturas /> },
  { path: "documentos", element: <Documentos /> },
];
