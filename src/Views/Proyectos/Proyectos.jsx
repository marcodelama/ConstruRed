import { dataProyectos, headersProyectos } from "../../Data/Proyectos";
import { IconoBuscar, IconoEditar, IconoEliminar } from "../../Icons/Iconos";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Layout } from "../../Layout/Layout";

export const Proyectos = () => {
  return (
    <Layout
      areaPagina={"Proyectos"}
      children={
        <>
          <div className="relative mb-8">
            <div className="relative overflow-x-auto sm:rounded-lg">
              <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                <label htmlFor="table-search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                    <IconoBuscar className="relative text-gray-500 dark:text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="table-search"
                    className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-[rgb(26,32,53)] dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                    placeholder="Buscar Proyectos"
                  />
                </div>
              </div>
              <div className="ScrollTableVertical w-full overflow-x-auto">
                <table className="w-[135%] text-sm text-left rtl:text-right">
                  <thead className="text-xs uppercase text-[#374151] dark:text-[rgba(255,255,255,0.87)] bg-[#f9fafb] dark:bg-[rgb(41,51,79)] border-b border-[#e5e7eb] dark:border-[#424b57]">
                    <tr>
                      {headersProyectos.map((item, index) => {
                        return (
                          <th key={index} scope="col" className="px-6 py-3">
                            {item}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {dataProyectos.map((item) => {
                      return (
                        <tr
                          key={item.id}
                          className="border-b bg-white dark:bg-[#1f2937] dark:border-[#424b57] text-[#374151] dark:text-[rgba(255,255,255,0.87)]"
                        >
                          <td className="px-6 py-4">{item.id}</td>
                          <td className="px-6 py-4">{item.nombre}</td>
                          <td className="px-6 py-4">{item.fechaInicio}</td>
                          <td className="px-6 py-4">{item.fechaFin}</td>
                          <td className="px-6 py-4">{item.cliente}</td>
                          <td className="px-6 py-4">{item.descripcion}</td>
                          {item.estado === "En Progreso" ? (
                            <td className="px-6 py-4">
                              <p className="relative bg-blue-400 dark:bg-blue-700 p-2 rounded-full text-white dark:text-gray-200 cursor-pointer text-center">
                                {item.estado}
                              </p>
                            </td>
                          ) : (
                            <td className="px-6 py-4">
                              <p className="relative bg-green-400 dark:bg-green-700 p-2 rounded-full text-white dark:text-gray-200 cursor-pointer text-center">
                                {item.estado}
                              </p>
                            </td>
                          )}
                          <td className="px-6 py-4">
                            <button className="relative mr-2 border border-blue-400 dark:border-blue-700 text-blue-400 dark:text-gray-300 dark:hover:bg-blue-700 hover:bg-blue-400 hover:text-white dark:hover:text-white p-2 rounded-full transition-all duration-[0.4s]">
                              <IconoEditar />
                            </button>
                            <button className="relative border border-red-400 dark:border-red-700 text-red-400 dark:text-red-700 dark:hover:bg-red-700 hover:bg-red-400 dark:hover:text-white hover:text-white p-2 rounded-full transition-all duration-[0.4s]">
                              <IconoEliminar />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-between p-4 border-t border-blue-gray-50 bg-white dark:bg-[rgb(32,41,64)]">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 dark:text-gray-500">
                  Página 1 de 10
                </p>
                <div className="flex gap-2">
                  <button
                    className="select-none rounded-lg border border-gray-900 dark:border-gray-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 dark:text-gray-500 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Anterior
                  </button>
                  <button
                    className="select-none rounded-lg border border-gray-900 dark:border-gray-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 dark:text-gray-500 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Siguiente
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    />
  );
};
