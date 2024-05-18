import {
  IconoAgregarPersona,
  IconoBarras,
  IconoBoockings,
  IconoTienda,
} from "../../../../Icons/Iconos";
import { Cuadro } from "./Components/Cuadro";

export const ContCuadros = () => {
  return (
    <>
      <div className="cont-cuadros-dashboard flex flex-wrap -mt-6 w-[calc(100%+24px)] -ml-6">
        <Cuadro
          bgCuadroIcono={"bookings"}
          icono={<IconoBoockings />}
          titulo={"Empleados"}
          datos={"281"}
          porcentaje={"+55%"}
          ultimaActualizacion={"than lask week"}
        />
        <Cuadro
          bgCuadroIcono={"barras"}
          icono={<IconoBarras />}
          titulo={"Proyectos"}
          datos={"2300"}
          porcentaje={"+55%"}
          ultimaActualizacion={"El mes pasado"}
        />
        <Cuadro
          bgCuadroIcono={"store"}
          icono={<IconoTienda />}
          titulo={"Ganancias"}
          datos={"34K"}
          porcentaje={"+55%"}
          ultimaActualizacion={"Este mes"}
        />
        <Cuadro
          bgCuadroIcono={"add-person"}
          icono={<IconoAgregarPersona />}
          titulo={"Clientes"}
          datos={"+91"}
          porcentaje={""}
          ultimaActualizacion={"Hace un momento"}
        />
      </div>
    </>
  );
};
