import { Layout } from "../../Layout/Layout";
import { ContCuadros } from "./Components/ContenedorCuadros/ContCuadros";
import { ContEstadistica } from "./Components/ContenedorEstadistica/ContEstadistica";
import { Table } from "./Components/Table/Table";
import { Card } from "./Components/Card/Card";

export const Home = () => {
  return (
    <>
      <Layout
        areaPagina={"Home"}
        children={
          <>
            
              <ContCuadros />
              <div className="mt-9 bg-transparent">
                <ContEstadistica />
              </div>
              <div className="">
                <div className="flex flex-wrap -mt-6 -ml-6 w-[calc(100%+24px)]">
                  <div className="pl-6 pt-6 basis-[66.6667%] max-w-[66.6667%]">
                    <Table />
                  </div>
                  <div className="pl-6 pt-6 basis-[33.3333%] max-w-[33.3333%]">
                    <Card />
                  </div>
                </div>
              </div>
            
          </>
        }
      />
    </>
  );
};
