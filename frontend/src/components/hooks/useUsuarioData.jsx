import { useEffect, useState } from 'react';
import axios from 'axios';
import API_URL from './config';

const useUsuariosData = () => {
  const [Usuarios, setusuario] = useState([]);

  useEffect(() => {
    fetchDataUsuarios();
  }, []);

  const fetchDataUsuarios = async () => {
    try {
      const response = await axios.get(`${API_URL}/usuario`);
      setusuario(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return { Usuarios, fetchDataUsuarios };
};

export default useUsuariosData;