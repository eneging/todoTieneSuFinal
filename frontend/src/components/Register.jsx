
import axios from 'axios';
import { useState } from 'react';
import API_URL from './config';
import Swal from 'sweetalert2'

const Register = ({ onRegister, toggleForm }) => {
  const [formData, setFormData] = useState({
    usuario: '',
    email: '',
    password: '',
  });


  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post(`${API_URL}/register`, formData);
      console.log(response.data);
      

 if (handleRegister){
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
        title: "usuario creado exitosamente"
      });
    toggleForm();
 }

      
    
    
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className="bg-cover  bg-center bg-fixed bg-[url('https://picsum.photos/1920/1080')]">
<div className="h-screen flex justify-center items-center">
<div className="bg-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
      <h1 className="text-3xl font-bold mb-8 text-center" >Register</h1>

      <div className='mb-4'>
     <label className="block font-semibold text-gray-700 mb-2" >
                       Usuario
                    </label>
      <input type="text" name="usuario" placeholder="usuario" onChange={handleInputChange} />
      </div>

      <div className='mb-4'>
     <label className="block font-semibold text-gray-700 mb-2" >
                       Email
                    </label>
      <input type="email" name="email" placeholder="Email" onChange={handleInputChange} />
     </div>


      <div className='mb-4'>
      <label className="block font-semibold text-gray-700 mb-2">
                        Password
                    </label>
                    <input type="password" name="password" placeholder="Password" onChange={handleInputChange} />

      </div>

     
      
     <div className="mb-7  flex flex-col gap-5">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleRegister}>Register</button>
      
      
      <p>
        Already have an account? <span onClick={toggleForm}>Login</span>
      </p>
      </div>
</div>
      </div>

    </div>
  );
};

export default Register;