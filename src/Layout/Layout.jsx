import { useEffect, useState } from "react";

import { Aside, Header } from "./Components";
import { Configuration } from "./Modals/Configuration";

export const Layout = ({ children, areaPagina }) => {
  //Estado para abrir el modal de configuración
  const [modalConfiguration, setModalConfiguration] = useState(false);
  // Estado para abrir el modal del aside
  const [asideShow, setAsideShow] = useState(false);

  // Función para obtener el tema almacenado en localStorage
  const obtenerTemaAlmacenado = () => {
    const temaGuardado = localStorage.getItem("tema");
    return (
      temaGuardado ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
    );
  };

  // Estado del tema
  const [Tema, NuevoTema] = useState(obtenerTemaAlmacenado());

  useEffect(() => {
    if (Tema === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [Tema]);

  const CambiarTema = () => {
    // Cambiar el estado del tema
    const nuevoTema = Tema === "light" ? "dark" : "light";
    NuevoTema(nuevoTema);

    // Actualizar el tema en localStorage
    localStorage.setItem("tema", nuevoTema);
  };

  // Apertura del Modal de Configuracion
  const openConfiguration = () => {
    setModalConfiguration(!modalConfiguration);
  };

  // Funcion para cerrar el Modal de Configuracion
  const closeConfiguration = () => {
    setModalConfiguration(false);
  };

  // Funcion para mostrar el aside
  const showAside = () => {
    setAsideShow(!asideShow);
  };

  // Funcion para ocultar el aside
  const hideAside = () => {
    setAsideShow(false);
  };

  // Html a renderizar
  return (
    <>
      <div className="relative xl:pl-[20rem] md:pt-6 md:px-6 md:pb-6 w-full bg-[rgb(240,242,245)] dark:bg-[rgb(26,32,53)] transition-all">
        <div className="absolute left-0 top-0 w-full h-[100vh] bg-[rgb(240,242,245)] dark:bg-[rgb(26,32,53)]" />
        <Aside
          // Estado que almacena si es true o false
          asideShow={asideShow}
          // Funcion para cerrar el aside
          hideAside={hideAside}
        />
        <Header
          // Función para mostrar/ocultar el modal de configuracion
          openConfiguration={openConfiguration}
          // Prop area de la pagina
          areaPagina={areaPagina}
          // Funcion para mostrar el aside
          showAside={showAside}
        />
        <div className="relative pt-7">{children}</div>
        <div className="footer flex-col lg:flex-row">
          <div className="marca-footer flex flex-wrap justify-center items-center text-[rgb(123,128,154)] text-[0.875rem] px-3 bg-transparent dark:text-[rgba(255,255,255,0.8)]">
            © 2024
          </div>
          <ul className="lista-footer mt-6 lg:mt-0">
            <li className="contenido-lista bg-transparent px-4 cursor-pointer dark:text-[rgba(255,255,255,0.8)]">
              About Us
            </li>
            <li className="contenido-lista bg-transparent px-4 cursor-pointer dark:text-[rgba(255,255,255,0.8)]">
              Blog
            </li>
            <li className="contenido-lista bg-transparent px-4 cursor-pointer dark:text-[rgba(255,255,255,0.8)]">
              Licence
            </li>
          </ul>
        </div>
        <Configuration
          // Cerrar modal de configuración
          closeConfiguration={closeConfiguration}
          // Estado del modal de configuracion activado/desactivado
          modalConfiguration={modalConfiguration}
          // Funcion para activar y desactivar el modo oscuro
          CambiarTema={CambiarTema}
          // Tema oscuro/claro
          Tema={Tema}
        />
      </div>
    </>
  );
};
