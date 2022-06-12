import { Navigate, Outlet } from "react-router-dom";

function RotasProtegidas() {
   const  token  = window.localStorage.getItem("logado")
   return token ? <Outlet /> : <Navigate to="/" />;
}

export default RotasProtegidas;
