import { useEffect, useState } from "react";
import {
  IconoHome,
  IconoConfig,
  IconoAlerta,
  Usuario,
  IconoHamburguesa,
} from "../../Icons/Iconos";
import { estilosHeader, stylesTitulosGenerales } from "../../Css/Generales";
import { useConfig } from "../../Hooks/useConfig";

export const Header = ({ openConfiguration, areaPagina, showAside }) => {
  const { isNavbarFixed } = useConfig();

  // Estado para aplicar los estilos al div  que contiene el header
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledDown = window.scrollY > 0;
      setIsScrolledDown(scrolledDown);
    };

    // Agrega el evento de scroll al montar el componente
    window.addEventListener("scroll", handleScroll);

    // Limpia el evento de scroll al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`grid w-full min-h-[4.6875rem] ${
          isNavbarFixed ? "sticky" : "static"
        } ${
          isScrolledDown && isNavbarFixed ? "scrolled-down" : "scrolled-up"
        } ${estilosHeader}`}
      >
        <div className="flex flex-col md:flex-row p-[0.25rem_1rem] justify-between items-center">
          <div className="relative flex items-center justify-between w-full xl:w-max mb-2 sm:mb-0">
            <div className="relative">
              <nav className="relative">
                <ol className="flex flex-wrap items-center p-0 m-0 text-[1.25rem] font-normal leading-relaxed tracking-[0.00938em]">
                  <li className="">
                    <p className="home text-[1.2rem]">
                      <IconoHome />
                    </p>
                  </li>
                  <li className="text-[rgb(108,117,125)] flex mx-[8px] text-[0.875rem]">
                    /
                  </li>
                  <li className="cont-sidebar leading-[0]">
                    <span className="m-0 text-[0.875rem] tracking-[0.02857em] opacity-[1] capitalize text-[rgb(52,71,103)] font-normal dark:text-[rgb(255,255,255)]">
                      {areaPagina}
                    </span>
                  </li>
                </ol>
              </nav>
              <h6 className={`${stylesTitulosGenerales}`}>{areaPagina}</h6>
            </div>
          </div>
          <div className="flex justify-end w-full xl:w-max">
            <button className="text-[1.25rem] p-[5px_6px]">
              <Usuario />
            </button>
            <button
              className="text-[0.96rem] p-[5px_6px]"
              onClick={openConfiguration}
            >
              <IconoConfig />
            </button>
            <button className="text-[1.25rem] p-[5px_6px]">
              <IconoAlerta />
            </button>
            <button
              type="button"
              onClick={showAside}
              className="text-[1.25rem] p-[5px_6px] block sm:hidden"
            >
              <IconoHamburguesa />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
