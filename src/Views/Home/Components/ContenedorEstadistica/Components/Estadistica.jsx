import {
  stylesSubtitulosGenerales,
  stylesTitulosGenerales,
} from "../../../../../Css/Generales";

export const Estadistica = ({
  grafico,
  tituloEstadistica,
  textoEstadistica,
}) => {
  return (
    <>
      <div className="pl-6 pt-6 w-[50%]">
        <div className="mb-6 bg-transparent">
          <div className="relative flex flex-col h-full min-w-0 bg-white dark:bg-[rgb(32,41,64)] border-[0px] border-solid border-[rgba(0,0,0,0.125)] rounded-[0.75rem] shadow-[rgba(0,0,0,0.1)_0rem_0.25rem_0.375rem_-0.0625rem] dark:shadow-[rgba(0,0,0,0.14)_0rem_0.125rem_0.125rem_0rem]">
            <div className="p-[1rem] bg-transparent">
              <div
                className={`bg-[rgb(25,25,25)] dark:bg-white py-4 pr-1 -mt-10 h-[300px] rounded-[0.75rem]`}
              >
                {grafico}
              </div>
              <div className="p-[24px_8px_8px] bg-transparent">
                <h6 className={`${stylesTitulosGenerales}`}>
                  {tituloEstadistica}
                </h6>
                <div className={`${stylesSubtitulosGenerales}`}>
                  {textoEstadistica}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
