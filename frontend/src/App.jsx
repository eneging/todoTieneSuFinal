

import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';

import Home from './components/Home';
import Dashboard from './pages/Dashboard';
import Bitacora from './pages/Bitacora';
import NoPage from './pages/NoPage';
import Layout from './pages/Layout';
import Edit from './pages/sidebar/Edit';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };


  const handleRegister = () => {
    setIsAuthenticated(true);
  };

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div>
    {isAuthenticated ? (
        <>
   
       <BrowserRouter>
      <Routes>
      
        <Route  path="/" element={<Layout onLogout={handleLogout} />}>
          <Route index  element={<Home />} />
          <Route path="blogs" element={<Dashboard />} />
          <Route path="contact" element={<Bitacora />} />
         <Route path="/edit" element={<Edit />}></Route>
          <Route path="*" element={<NoPage />} />
        </Route>

      </Routes>
    </BrowserRouter>

         
        </>
      ) : isRegistering ? (
        <Register onRegister={handleRegister} toggleForm={toggleForm} />
      ) : (
        <Login onLogin={handleLogin} toggleForm={toggleForm} />
      )}
    </div>
  );
};

export default App;