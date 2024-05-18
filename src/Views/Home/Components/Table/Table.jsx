import { IconoCheck, SeeMore } from "../../../../Icons/Iconos";
import { encabezadosTable } from "../../../../Data/Encabezados";
import { datosTable } from "../../../../Data/Encabezados";
import { ProgressBar } from "../ProgrssBar/ProgBar";
import {
  stylesSubtitulosGenerales,
  stylesTitulosGenerales,
} from "../../../../Css/Generales";

export const Table = () => {
  return (
    <>
      <div className="estilo-table relative flex flex-col bg-white dark:bg-[rgb(32,41,64)] rounded-[0.75rem]">
        <div className="flex justify-between items-center p-6 bg-transparent">
          <div className="">
            <h6 className={`m-[0px_0px_0.35em] ${stylesTitulosGenerales}`}>
              Contratos
            </h6>
            <div className="flex items-center bg-transparent">
              <IconoCheck className="text-[rgb(26,115,232)]" />
              <span className={`m-0 ${stylesSubtitulosGenerales}`}>
                <strong className="font-bold px-1">30 proyectos</strong>este mes
              </span>
            </div>
          </div>
          <div className="icon-seemore px-4 bg-transparent">
            <SeeMore />
          </div>
        </div>
        <div className="">
          <div className="ScrollTableVertical w-full overflow-x-auto bg-transparent rounded-[0.75rem]">
            <table className="w-[150%] text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-transparent">
                {/* Mapeamos los encabezados de la tabla */}
                <tr>
                  {encabezadosTable.map((encab, index) => (
                    <th
                      key={index}
                      scope="col"
                      className="relative text-[0.65rem] text-[rgb(123,128,154)] dark:text-white text-left px-4 py-3 opacity-[0.7] font-bold uppercase"
                    >
                      {encab}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Mapeamos las filas de la tabla con map y un contador para asignarle a cada una de ellas el indice*/}
                {datosTable.map((datos) => (
                  <tr key={datos.id} className="bg-transparent">
                    <th
                      scope="row"
                      className={`compani-table px-6 py-4 font-medium text-[rgb(123,128,154)] dark:text-[rgba(255,255,255,0.8)] whitespace-nowrap`}
                    >
                      {datos.nombre}
                    </th>
                    <td className="text-[rgb(123,128,154)] dark:text-[rgba(255,255,255,0.8)] px-6 py-4">
                      {datos.miembros}
                    </td>
                    <td className="text-[rgb(123,128,154)] dark:text-[rgba(255,255,255,0.8)] px-6 py-4">
                      {datos.presupuesto}
                    </td>
                    <td className="px-6 py-4">
                      <ProgressBar
                        porcentaje={datos.progreso}
                        width={200}
                        height={9}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
