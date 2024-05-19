import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { user } from "../../Data/Acceso";
import { toast, Toaster } from "sonner";
import { InputForm } from "../../Css/InputLogin";
import { IconKey, Usuario } from "../../Icons/Iconos";

export const Login = () => {
  // Estado para guardar los datos del SignIn
  const [formData, setFormData] = useState({ rol: "", password: "" });

  // Navegación por rutas
  const navigate = useNavigate();

  // Funcion para enviar el formulario
  const handleSubmit = (e) => {
    // Evitamos que la pagina se recarge
    e.preventDefault();

    // Validamos que los datos sean iguales
    if (user.rol === formData.rol && user.password === formData.password) {
      // LocalStorage
      localStorage.setItem("user", JSON.stringify(user.rol));

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
      <div>
        <section className="min-h-screen flex items-stretch text-white ">
          <div className="fondo-form lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center">
            <div className="absolute bg-black opacity-50 inset-0 z-0"></div>
            <div className="w-full px-24 z-10">
              <h1 className="text-4xl font-bold text-left tracking-wide">
                Bienvenido a ConstruRed
              </h1>
              <p className="my-4 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti voluptatibus quia sit neque mollitia nobis ex
                necessitatibus quis, dolores suscipit et recusandae obcaecati
                voluptas beatae dolorum? Ipsa laborum velit nemo?
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0">
            <div className="w-full py-6 z-20">
              <h1 className="my-6 text-black text-4xl font-bold">
                Inicia Sesión
              </h1>
              <form
                onSubmit={handleSubmit}
                className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
              >
                {/* Input del Rol */}
                <InputForm
                  type={""}
                  name={"rol"}
                  id={"rol"}
                  icon={<Usuario />}
                  text={"Rol"}
                  value={formData.rol}
                  onChange={(e) =>
                    setFormData({ ...formData, rol: e.target.value })
                  }
                />

                {/* Input del Password */}
                <InputForm
                  type={"password"}
                  name={"password"}
                  id={"password"}
                  icon={<IconKey />}
                  text={"Contraseña"}
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <div className="my-2">
                  <button
                    type="submit"
                    className="relative w-full bg-blue-700 py-2 rounded-[5px]"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
