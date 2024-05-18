import {
  stylesSpanCard,
  stylesTituloCard,
} from "../../../../../Css/Generales";

export const Order = ({ icono, titulo, fecha, background }) => {
  return (
    <>
      <div className="relative mb-6 bg-transparent">
        <div className={`icon-oder ${background}`}>{icono}</div>
        <div className="ml-[46px] pt-1 max-w-[30rem] bg-transparent">
          <span className={`${stylesTituloCard} dark:text-white`}>
            {titulo}
          </span>
          <div className="mt-1 bg-transparent">
            <p
              className={`${stylesSpanCard} dark:text-[rgba(255,255,255,0.8)]`}
            >
              {fecha}
            </p>
          </div>
        </div>
        <div className="rayita-card" />
      </div>
    </>
  );
};
