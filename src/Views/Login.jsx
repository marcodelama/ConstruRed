import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { user } from "../Data/Acceso";
import { toast, Toaster } from "sonner";

export const Login = () => {
  // Estado para guardar los datos del SignIn
  const [formData, setFormData] = useState({ Rol: "", Password: "" });

  // Navegación por rutas
  const navigate = useNavigate();

  // Funcion para capturar el evento de los input
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Funcion para enviar el formulario
  const handleSubmit = (e) => {
    // Evitamos que la pagina se recarge
    e.preventDefault();

    // Validamos que los datos sean iguales
    if (user.Rol === formData.Rol && user.Password === formData.Password) {
      // LocalStorage
      localStorage.setItem("user", JSON.stringify(user.Rol));

      // Alerta de succes
      toast.success("Inicio de Sesión Exitoso");

      // Redirigimos
      // navigate("/");
    }

    // Alerta error
    // toast.error("Error en las credenciales");
  };

  // useEffect(() => {
  //   // Verificamos si el usuario ya está autenticado
  //   const isAuthenticated = localStorage.getItem("user");

  //   // Si está autenticado, redirigimos a la página principal
  //   if (isAuthenticated) {
  //     navigate("/", { replace: true });
  //   }
  // }, []);

  return (
    <>
      <Toaster />
      <div className="cont-login relative flex flex-col justify-center w-full h-[100vh] items-center">
        <div className="fondo duration-700 absolute bg-black h-full w-full opacity-50 top-0 left-0"></div>
        <div className="cont-container-login relative w-[735px] max-w-full min-h-[345px]">
          <div
            className={`container z-20 rounded-2xl relative overflow-hidden w-full h-full `}
          >
            <div className="form-container sign-in-container absolute top-0 left-0 w-1/2 h-full ease-in-out transition-transform duration-[0.01s]">
              <form
                onSubmit={handleSubmit}
                className="bg-white flex flex-col p-[0_50px] h-full justify-center items-center text-center"
              >
                <h1 className="txt-titulo font-bold">Iniciar Sesión</h1>
                <input
                  className="bg-[#eee] border-none p-[12px_15px] m-[8px_0] w-full"
                  type="text"
                  name="Rol"
                  placeholder="Rol"
                  value={formData.Rol}
                  onChange={handleInputChange}
                  required
                />
                <input
                  className="bg-[#eee] border-none p-[12px_15px] m-[8px_0] w-full"
                  type="password"
                  name="Password"
                  placeholder="Password"
                  value={formData.Password}
                  onChange={handleInputChange}
                  required
                />
                <button
                  type="submit"
                  className=" rounded-3xl border border-solid border-blue-500 bg-blue-500 hover:bg-blue-600 text-white text-xs p-[12px_45px] uppercase active:scale-95 outline-none"
                >
                  Iniciar Sesión
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
