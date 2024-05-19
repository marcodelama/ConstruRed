import {
  Biling,
  IconoAlerta,
  IconoDashboard,
  RTL,
  SignUp,
  Tablas,
  Usuario,
} from "../../Icons/Iconos";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useConfig } from "../../Hooks/useConfig";

export const Aside = ({ asideShow }) => {
  const navigate = useNavigate();

  const { backgroundAside } = useConfig();

  const handleLogout = () => {
    // Limpiar la información de sesión
    localStorage.removeItem("user");

    // Redirigir al usuario a la página de inicio de sesión
    navigate("/logIn");
  };

  // Arreglo de los items del Menu
  const menuItems = [
    {
      icon: <IconoDashboard />,
      label: "Home",
      link: "/",
    },
    {
      icon: <Biling />,
      label: "Contratos",
      link: "/contratos",
    },
    {
      icon: <IconoAlerta />,
      label: "Empleados",
      link: "/empleados",
    },
    {
      icon: <Biling />,
      label: "Proveedores",
      link: "/proveedores",
    },
    {
      icon: <RTL />,
      label: "Clientes",
      link: "/clientes",
    },
    {
      icon: <Usuario />,
      label: "Pagos",
      link: "/pagos",
    },
    {
      icon: <Usuario />,
      label: "Facturas",
      link: "/facturas",
    },
    {
      icon: <IconoAlerta />,
      label: "Documentos",
      link: "/documentos",
    },
  ];

  return (
    <>
      <aside
        className={`${backgroundAside} fixed top-0 left-0 z-[1112] w-[270px] h-[calc(100vh-2rem)] m-[1rem] rounded-[0.75rem] ${
          asideShow ? "translate-x-[0%]" : "translate-x-[-110%]"
        } xl:translate-x-0 shadow-[rgba(0,0,0,0.05)0rem1.25rem1.6875rem0rem] transition-all duration-500`}
      >
        <div className="ScrollTableVertical w-full h-full flex flex-col px-3 py-4 overflow-y-auto">
          <div className="cont-logo p-[24px_32px_8px]">
            <div className="logo flex items-center w-full justify-center">
              <h1 className="relative font-bold text-[30px] leading-7 tracking-[1px]">
                ConstruRed
              </h1>
            </div>
          </div>
          <hr className="linea-separadora my-4 h-[0.0625rem] bg-transparent" />
          <ul className="space-y-2 font-medium">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.link}>
                  <div
                    className={`relative flex items-center p-2 rounded-lg cursor-pointer bg-transparent caja-hover `}
                  >
                    {item.icon}
                    <span className="ms-3">{item.label}</span>
                  </div>
                </Link>
              </li>
            ))}
            <li>
              <div
                onClick={() => handleLogout()}
                className="relative flex items-center p-2 rounded-lg cursor-pointer bg-transparent caja-hover"
              >
                <SignUp />
                <span className="ms-3 ">Cerrar Sesión</span>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
