import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "@material-tailwind/react";

export const Login = () => {
  // Estado para guardar los datos del SignIn
  const [formData, setFormData] = useState({ Rol: "", Password: "" });
  // Estado para mostrar la alerta de error de login
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  // Estado para mostrar la alerta de login exitoso
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  // Navegación por rutas
  const navigate = useNavigate();

  // Funcion para capturar el evento de los input
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Creamos un usuario ficticio
  const user = {
    Rol: "admin",
    Password: "1234",
  };

  // Funcion para enviar el formulario
  const handleSubmit = (e) => {
    // Evitamos que la pagina se recarge
    e.preventDefault();

    // Validamos que los datos sean iguales
    if (user.Rol === formData.Rol && user.Password === formData.Password) {
      setShowErrorAlert(false);
      setShowSuccessAlert(true);

      // Temporizador antes de redirigir a la pagina principal
      setTimeout(() => {
        // Lo almacenamos en un localStorage
        localStorage.setItem("userInfo", JSON.stringify(user.Rol));

        // Redireccionamos a la página principal
        navigate("/", { replace: true });
      }, 1000);
    }

    // Sino mostramos una alerta de error de credenciales
    else {
      setShowErrorAlert(true);
      setShowSuccessAlert(false);
    }
  };

  useEffect(() => {
    // Temporizador para ocultar las alertas después de 3 segundos
    const timeoutId = setTimeout(() => {
      setShowErrorAlert(false);
      setShowSuccessAlert(false);
    }, 3000);

    // Limpiamos el temporizador al desmontar el componente
    return () => clearTimeout(timeoutId);
  }, [showErrorAlert, showSuccessAlert]);

  useEffect(() => {
    // Verificamos si el usuario ya está autenticado
    const isAuthenticated = Boolean(localStorage.getItem("userInfo"));

    // Si está autenticado, redirigimos a la página principal
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  return (
    <>
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
      {showErrorAlert && (
        <Alert
          show={showErrorAlert}
          onClose={() => setShowErrorAlert(false)}
          className="absolute top-4 right-4 w-2/5 rounded-none border-l-4 border-red-500 bg-red-500/10 font-medium text-red-500"
        >
          Usuario o contraseña incorrecta
        </Alert>
      )}

      {showSuccessAlert && (
        <Alert
          show={showSuccessAlert}
          onClose={() => setShowSuccessAlert(false)}
          className="absolute top-4 right-4 w-2/5 rounded-none border-l-4 border-green-500 bg-green-500/10 font-medium text-green-500"
        >
          Iniciaste Sesión con éxito
        </Alert>
      )}
    </>
  );
};
