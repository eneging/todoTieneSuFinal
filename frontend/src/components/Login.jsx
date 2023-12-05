import Fondo from './img/9019805.jpg';
import axios from 'axios';
import { useState } from 'react';
import API_URL from './config';
import Swal from 'sweetalert2'

const Login = ({ onLogin, toggleForm }) => {
  const [formData, setFormData] = useState({
    usuario: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/login`, formData);
      console.log(response.data);

      const token = response.data.access_token; 
    localStorage.setItem('token', token);

    const userData = response.data.users;
    localStorage.setItem('usuario',  JSON.stringify(userData));
   
    
if (userData) {



        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: `Bienvenido ${response.data.users.usuario}`
          });
    onLogin();
}

    // Almacena el token en localStorage
  
    } catch (error) {
    
       
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "warning",
            title: "credenciales incorrectas"
          });

      console.error(error.response.data);
    }
  };

  return (
    <div className="bg-cover  bg-center bg-fixed bg-[url('https://picsum.photos/1920/1080')]">
     
        {!onLogin ? null : (
     <>
<div className="h-screen flex justify-center items-center">
<div className="bg-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">

     <h1 className="text-3xl font-bold mb-8 text-center" >Login</h1>

     <div className='mb-4'>
     <label className="block font-semibold text-gray-700 mb-2" >
                       Usuario
                    </label>
      <input   className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"   type="text" name="usuario" placeholder="usuario" onChange={handleInputChange} />
      </div>
      
      <div>
      <label className="block font-semibold text-gray-700 mb-2">
                        Password
                    </label>
      <input   className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  type="password" name="password" placeholder="Password" onChange={handleInputChange} />
      </div>
     
      <div className="mb-7  flex flex-col gap-5">
      <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"  onClick={handleLogin}>Login</button>
      <p>
        Don't have an account? <span onClick={toggleForm}>Register</span>
      </p>
</div>
      
      </div>
      </div>
      </>)}
    </div>
  );
};

export default Login;