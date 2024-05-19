import { Estadistica } from "./Components/Estadistica";
import { Barras } from "./Components/Components/Barras/Barras";
import { Puntos } from "./Components/Components/Puntos/Puntos";

export const ContEstadistica = () => {
  return (
    <>
      <div className="flex flex-wrap -mt-6 w-full -ml-6">
        <Estadistica
          tituloEstadistica={"Top 10 Destinos"}
          textoEstadistica={"Performance"}
          grafico={<Barras />}
        />
        <Estadistica
          tituloEstadistica={"Frecuencia Diaria de Compras"}
          textoEstadistica={"Performance"}
          grafico={<Puntos />}
        />
      </div>
    </>
  );
};
