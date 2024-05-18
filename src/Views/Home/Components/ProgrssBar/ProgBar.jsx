import { useState, useEffect } from "react";

export const ProgressBar = ({ porcentaje, width, height }) => {
  // Estado que guarda el porcentaje
  const [progress, setProgress] = useState(0);
  // Estado que establece el color de la barra de progreso dependiendo del porcentaje
  const [color, setColor] = useState("#4CAF50");

  useEffect(() => {
    setProgress(porcentaje);

    // Condiciones para cambiar el color
    if (porcentaje <= 12) {
      setColor("red");
    } else if (porcentaje <= 84) {
      setColor("yellow");
    } else {
      setColor("#4CAF50");
    }
  }, [porcentaje]);

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        border: "1px solid #ccc",
        borderRadius: "4px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          backgroundColor: color,
          transition: "width 0.5s ease-in-out",
        }}
      />
    </div>
  );
};
