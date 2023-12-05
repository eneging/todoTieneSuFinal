import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import '../App.css'
import Swal from "sweetalert2";

function Layout({ onLogout }) {
  const [open, setOpen] = useState(false);

 
  const handleOpen = () => {
    setOpen(true);
    Swal.fire({
      title: "Estas seguro?",
      text: "quieres cerrar session!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "si, salir!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "session terminada!",
          text: "Tu session fue cerrada con exito.",
          icon: "success"
        });
        onLogout();

      }
    });
  }

 

  return (
    <>
      <nav className="bg-gray-200 h-[10vh]  flex w-screen justify-center items-center  ">
        <ul className="flex justify-between items-center w-[90vw] content-center ">
          <li>
            <img className="w-[15vw]" src="https://upload.wikimedia.org/wikipedia/commons/6/60/Bitacora-logo.png" alt="logo"></img>
          </li>

    
          <li className="bg-gray-800 p-3 text-white">
          <a href="/usuarios">Admin Usuarios</a>
          </li>
<li  className="bg-gray-800 p-3 text-white"><a href="/home">Dashboard</a></li>

    <li>
            <button onClick={handleOpen}>
            <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 512 512">
             <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>
            </button>
          </li>

        </ul>

        
      </nav>

      <Outlet />
    </>
  );
}

export default Layout;
