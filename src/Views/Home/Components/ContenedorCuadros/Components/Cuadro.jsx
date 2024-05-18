import {
  styleCuadrosDashboard,
  stylesSubtitulosGenerales,
} from "../../../../../Css/Generales";

export const Cuadro = ({
  icono,
  titulo,
  datos,
  porcentaje,
  ultimaActualizacion,
  bgCuadroIcono,
}) => {
  return (
    <>
      <div className="pl-6 pt-6 w-[25%]">
        <div className="mb-3 bg-transparent shadow-none">
          <div className={`${styleCuadrosDashboard}`}>
            <div className="flex justify-between pt-2 px-4 bg-transparent">
              <div
                className={`${bgCuadroIcono} flex justify-center items-center w-16 h-16 text-[1.5rem] -mt-6 text-white rounded-[0.75rem]`}
              >
                {icono}
              </div>
              <div className="bg-transparent text-right leading-5">
                <span className={`${stylesSubtitulosGenerales}`}>{titulo}</span>
                <h4
                  className={`text-[rgb(52,71,103)] dark:text-white text-[1.5rem] leading-[1.375] tracking-[0.00735em] font-bold`}
                >
                  {datos}
                </h4>
              </div>
            </div>
            <hr className="separador-cuadros" />
            <div className="pb-4 px-4 bg-transparent">
              <p className="flex h-[21px]">
                <span className="m-0 text-[0.875rem] leading-[1.5] tracking-[0.02857em] opacity-100 uppercase no-underline text-green-500 font-bold h-full">
                  {porcentaje}
                </span>
                <span
                  className={`h-full m-[0px_0px_0px_5px] ${stylesSubtitulosGenerales}`}
                >
                  {ultimaActualizacion}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
