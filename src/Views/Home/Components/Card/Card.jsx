import {
  IconoAlerta,
  IconoInventory,
  IconoCarrito,
  IconoTarjeta,
  IconoUp,
} from "../../../../Icons/Iconos";
import {
  stylesSubtitulosGenerales,
  stylesTitulosGenerales,
} from "../../../../Css/Generales";
import { Order } from "./Components/Order";

export const Card = () => {
  return (
    <>
      <div className="estilo-card bg-white dark:bg-[rgb(32,41,64)]">
        <div className="px-6 pt-6 bg-transparent">
          <h6 className={`${stylesTitulosGenerales}`}>Resumen de pedidos</h6>
          <div className="mb-4 bg-transparent">
            <span className={`${stylesSubtitulosGenerales} flex`}>
              <IconoUp className="text-[rgb(76,175,80)] text-base my-[2px]" />
              <span className="px-1 font-semibold">24%</span>este mes
            </span>
          </div>
        </div>
        <div className="p-4 bg-transparent">
          <Order
            background={"bg-[rgb(76,175,80)]"}
            icono={<IconoAlerta />}
            titulo={"$2400, Diseños Cambiados"}
            fecha={"22 DEC 7:20 PM"}
          />
          <Order
            background={"bg-[rgb(244,67,53)]"}
            icono={<IconoInventory />}
            titulo={"+9 Nuevos Productos"}
            fecha={"21 DEC 10:45 AM"}
          />
          <Order
            background={"bg-[rgb(26,115,232)]"}
            icono={<IconoCarrito />}
            titulo={"Orden #123"}
            fecha={"21 DEC 9:34 PM"}
          />
          <Order
            background={"bg-[rgb(233,30,99)]"}
            icono={<IconoTarjeta />}
            titulo={"Pagos Completados"}
            fecha={"20 DEC 11:15 AM"}
          />
          <Order />
        </div>
      </div>
    </>
  );
};
