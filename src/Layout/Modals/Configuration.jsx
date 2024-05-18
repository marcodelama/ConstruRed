import { IconoCerrar } from "../../Icons/Iconos";
import {
  backgroundAsideBlanco,
  backgroundAsideNegro,
  buttonsBackgroundStyle,
  toggleStyle,
} from "../../Css/Generales";
import { useConfig } from "../../Hooks/useConfig";

export const Configuration = ({
  // Edta de activado/desactivado del modal de configuration
  modalConfiguration,
  // Funcion que cierra el modal de configuracion
  closeConfiguration,
  // Funcion que activa/desactiva el modo oscuro
  CambiarTema,
  // Estado con el tema oscuro activado/desactivado
  Tema,
}) => {
  const {
    isNavbarFixed,
    setIsNavbarFixed,
    backgroundAside,
    setBackgroundAside,
  } = useConfig();

  return (
    <>
      <div
        className={`side-panel-cont-container flex flex-col fixed border-none ${
          modalConfiguration ? "translate-x-[0%]" : "translate-x-[100%]"
        } w-[360px] h-full top-0 right-0 bottom-0 p-[0px_0.625rem] bg-[rgb(255,255,255)] dark:bg-[rgb(31,40,62)] transition-transform duration-300 z-[1112]`}
        style={{
          boxShadow:
            "rgba(0,0,0,0.1) 0rem 0.625rem 0.9375rem -0.1875rem,rgba(0,0,0,0.05) 0rem 0.25rem 0.375rem -0.125rem",
        }}
      >
        <div className="flex justify-between items-baseline p-[32px_24px_4px] opacity-[1] bg-transparent text-[rgb(52,71,103)]">
          <div className="opacity-[1] bg-transparent text-[rgb(52,71,103)]">
            <h5 className="text-[1.25rem] leading-[1.375] font-bold dark:text-white">
              ConstruRed Configuration
            </h5>
            <p className="text-[1rem] leading-[1.6] font-light text-[rgb(123,128,154)] dark:text-[rgba(255,255,255,0.8)]">
              Personaliza tú dashboard
            </p>
          </div>
          <button
            className="w-[1em] h-[1em] overflow-hidden inline-block text-center text-[rgb(52,71,103)] cursor-pointer dark:text-white"
            onClick={closeConfiguration}
          >
            <IconoCerrar />
          </button>
        </div>
        <hr className="my-4 h-[0.0625rem] bg-transparent" />
        <div className="p-[4px_24px_24px] bg-transparent opacity-[1]">
          <div className="leading-none bg-transparent text-[rgb(52,71,103)]">
            <h6 className="m-0 text-[1rem] leading-relaxed font-bold tracking-[0.0075em] dark:text-white">
              Background de los Aside
            </h6>
            <span className="text-[0.875rem] font-light leading-6 tracking-[0.02857em] text-[rgb(123,128,154)] dark:text-[rgba(255,255,255,0.8)]">
              Escoge el background del Aside
            </span>
            <div className="flex bg-transparent mt-4 mx-auto">
              <div className="relative">
                <button
                  onClick={() => {
                    setBackgroundAside(backgroundAsideNegro);
                  }}
                  className={`${
                    backgroundAside === backgroundAsideNegro
                      ? "text-[rgb(255,255,255)] bg-[rgb(25,25,25)] shadow-[rgba(52,71,103,0.15)_0rem_0.1875rem_0.1875rem_0rem] dark:text-[rgb(31,40,62)] dark:bg-[rgb(255,255,255)]"
                      : "dark:bg-[rgb(31,40,62)] dark:text-white"
                  } ${buttonsBackgroundStyle}`}
                >
                  Negro
                </button>
              </div>
              <div className="relative ml-4">
                <button
                  onClick={() => {
                    setBackgroundAside(backgroundAsideBlanco);
                  }}
                  className={`${
                    backgroundAside === backgroundAsideBlanco
                      ? "text-[rgb(255,255,255)] bg-[rgb(25,25,25)] shadow-[rgba(52,71,103,0.15)_0rem_0.1875rem_0.1875rem_0rem] dark:text-[rgb(31,40,62)] dark:bg-[rgb(255,255,255)]"
                      : "dark:bg-[rgb(31,40,62)] dark:text-white"
                  } ${buttonsBackgroundStyle}`}
                >
                  Blanco
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-6 bg-transparent">
            <h6 className="text-[1rem] leading-[1.625] font-bold tracking-[0.0075em] text-[rgb(52,71,103)] dark:text-white">
              Navbar Fijo
            </h6>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={isNavbarFixed}
                onChange={() => setIsNavbarFixed(!isNavbarFixed)}
              />
              <div className={`${toggleStyle}`} />
            </label>
          </div>
          <hr className="my-4 h-[0.0625rem] bg-transparent" />
          <div className="flex justify-between items-center mt-6 bg-transparent">
            <h6 className="text-[1rem] leading-[1.625] font-bold tracking-[0.0075em] text-[rgb(52,71,103)] dark:text-white">
              Tema Claro / Oscuro
            </h6>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={Tema === "dark"}
                onChange={CambiarTema}
              />
              <div className={`${toggleStyle}`} />
            </label>
          </div>
          <hr className="my-4 h-[0.0625rem] bg-transparent" />
        </div>
      </div>
    </>
  );
};
