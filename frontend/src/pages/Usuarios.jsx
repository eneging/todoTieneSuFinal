import { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
} from "@mui/material";
import Swal from "sweetalert2";

const API_URL = "http://127.0.0.1:8000/api";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [modalEdit, setModalEdit] = useState(false);
  const [editUsuario, setEditUsuario] = useState({ 
    idusuario: null,
    usuario: "",
  email: "",
  habilitado: 1,
  idrol: "",
  fechamodificacion: "",
  usuariocreacion: "",
  usuariomodificacion: "",
});
  const [modalCreate, setModalCreate] = useState(false);
  const [newUsuario, setNewUsuario] = useState({
    usuario: "",
    email: "",
    habilitado: 1,
    idrol: "",
    fechamodificacion: "",
    usuariocreacion: "",
    usuariomodificacion: "",
  });

  useEffect(() => {
    fetchDataUsuarios();
  }, []);

  const fetchDataUsuarios = async () => {
    try {
      const response = await axios.get(`${API_URL}/usuario`);
      setUsuarios(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (idusuario) => {
    try {
      await axios.delete(`${API_URL}/usuario/${idusuario}`);
      fetchDataUsuarios();
      Swal.fire({
        title: "Eliminado!",
        text: "El registro ha sido eliminado.",
        icon: "success",
      });
    } catch (error) {
      console.error("Error deleting usuario:", error);
    }
  };

  const handleEdit = (usuario) => {
    setEditUsuario({ ...usuario });
   
    setModalEdit(true);
  };

  const handleCloseEditModal = () => {
    setModalEdit(false);
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API_URL}/usuario/${editUsuario.idusuario}`, {
        usuario: editUsuario.usuario,
        idpersona:editUsuario.idpersona,
        email: editUsuario.email,
        habilitado: editUsuario.habilitado,
        idrol: editUsuario.idrol,
        password:editUsuario.password,
        fechamodificacion: editUsuario.fechamodificacion,
        usuariocreacion: editUsuario.usuariocreacion,
        usuariomodificacion: editUsuario.usuariomodificacion,
      });
      fetchDataUsuarios();
      setEditUsuario({});
      handleCloseEditModal();
      Swal.fire({
        title: "Guardado!",
        text: "El registro ha sido guardado.",
        icon: "success",
      });
    } catch (error) {
      console.error("Error updating usuario:", error);
    }
  };

  const handleCreate = () => {
    setModalCreate(true);
  };

  const handleCloseCreateModal = () => {
    setModalCreate(false);
  };

  const handleSaveCreate = async (e) => {

    e.preventDefault();
    try {
      await axios.post(`${API_URL}/usuario`, {
        usuario: newUsuario.usuario,
        email: newUsuario.email,
        habilitado: newUsuario.habilitado,
        idrol: newUsuario.idrol,
        password: newUsuario.password,
        fechamodificacion: newUsuario.fechamodificacion,
        usuariocreacion: newUsuario.usuariocreacion,
        usuariomodificacion: newUsuario.usuariomodificacion,
      });
      fetchDataUsuarios();
      setNewUsuario({});
      handleCloseCreateModal();
      Swal.fire({
        title: "Guardado!",
        text: "El registro ha sido guardado.",
        icon: "success",
      });
    } catch (error) {
      console.error("Error creating usuario:", error);
    }
  };



  return (
    <div className="p-[5vh] overflow-x-auto">
      <div className=" flex justify-end ">
        <button
          className="bg-slate-800 text-white p-3 m-3"
          onClick={handleCreate}
        >
          Crear Usuario
        </button>
      </div>
      <div className="flex justify-end w-[100vw] px-[1%]">
        <Paper>
          <Table>
            <TableHead>
              <TableRow
              
              className="bg-gray-200 text-white">
                <TableCell >ID Usuario</TableCell>
                <TableCell>ID Persona</TableCell>
                <TableCell>Usuario</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Habilitado</TableCell>
                <TableCell>Fecha</TableCell>
                <TableCell>ID Rol</TableCell>
                <TableCell>Fecha Modificación</TableCell>
                <TableCell>Usuario Creación</TableCell>
                <TableCell>Usuario Modificacion</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usuarios.map((usuario) => (
                <TableRow key={usuario.idusuario}>
                  <TableCell>{usuario.idusuario}</TableCell>
                  <TableCell>{usuario.idpersona}</TableCell>
                  <TableCell>
                    <TextField
                      value={usuario.usuario}
                      onChange={(e) =>
                        setEditUsuario({
                          ...editUsuario,
                          usuario: e.target.value,
                        })
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={usuario.email}
                      onChange={(e) =>
                        setEditUsuario({
                          ...editUsuario,
                          email: e.target.value,
                        })
                      }
                    />
                  </TableCell>
                  <TableCell>
                    {usuario.habilitado ? (<div className="bg-green-500 text-white p-3 text-center" >Activo</div>) : (<div className="bg-red-500 text-white p-3" >Desactivado</div>)}
                  </TableCell>
                  <TableCell>{usuario.fecha}</TableCell>
                  <TableCell>
                    <TextField
                      value={usuario.idrol}
                      onChange={(e) =>
                        setEditUsuario({
                          ...editUsuario,
                          idrol: e.target.value,
                        })
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      type="date"
                      value={usuario.fechamodificacion}
                      onChange={(e) =>
                        setEditUsuario({
                          ...editUsuario,
                          fechamodificacion: e.target.value,
                        })
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      type="date"
                      value={usuario.usuariocreacion}
                      onChange={(e) =>
                        setEditUsuario({
                          ...editUsuario,
                          usuariocreacion: e.target.value,
                        })
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      type="date"
                      value={usuario.usuariomodificacion}
                      onChange={(e) =>
                        setEditUsuario({
                          ...editUsuario,
                          usuariomodificacion: e.target.value,
                        })
                      }
                    />
                  </TableCell>
                  <TableCell>
                    {editUsuario.idusuario === usuario.idusuario ? (
                      <Button onClick={handleSaveEdit}>Guardar</Button>
                    ) : (
                      <>
                        <Button onClick={() => handleEdit(usuario)}>
                          Editar
                        </Button>
                        <Button onClick={() => handleDelete(usuario.idusuario)}>
                          Eliminar
                        </Button>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
      {/* Modal para la edición */}
      {modalEdit && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-6 w-[30vw] rounded-md">
            <button
              onClick={handleCloseEditModal}
              className="bg-gray-500 text-white p-1 flex items-center justify-center rounded-md hover:bg-blue-400 focus:outline-none "
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <form className="flex flex-col gap-5 m-5" onSubmit={handleSaveEdit}>
              <div className="flex flex-col">
                <label>ID Persona</label>
                <input className="border-solid border border-gray-300 "
                  type="text"
                  value={editUsuario.idpersona}
                  onChange={(e) =>
                    setEditUsuario({ ...editUsuario, idpersona: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col">
                <label>Usuario</label>
                <input className="border-solid border border-gray-300 "
                  type="text"
                  value={editUsuario.usuario}
                  onChange={(e) =>
                    setEditUsuario({ ...editUsuario, usuario: e.target.value })
                  }
                />
              </div >
              <div className="flex flex-col">
                <label>Email</label>
                <input className="border-solid border border-gray-300 "
                  type="text"
                  value={editUsuario.email}
                  onChange={(e) =>
                    setEditUsuario({ ...editUsuario, email: e.target.value })
                  }
                />
              </div>

              <div className="flex flex-col">
  <label>Habilitado</label>
  <select  className="border-solid border border-gray-300 "
    value={editUsuario.habilitado}
    onChange={(e) =>
      setEditUsuario({ ...editUsuario, habilitado: e.target.value })
    }
  >
    <option value={1}>Habilitado</option>
    <option value={0}>Deshabilitado</option>
  </select>
</div>

              <div className="flex flex-col">
                <label>ID Rol</label>
                <input className="border-solid border border-gray-300 "
                  type="number"
                  value={editUsuario.idrol}
                  onChange={(e) =>
                    setEditUsuario({ ...editUsuario, idrol: e.target.value })
                  }
                />
              </div>


              <div className="flex flex-col">
                <label>Fecha Modificacion</label>
                <input className="border-solid border border-gray-300 "
                  type="date"
                  value={editUsuario.fechamodificacion}
                  onChange={(e) =>
                    setEditUsuario({ ...editUsuario, fechamodificacion: e.target.value })
                  }
                />
              </div>

              <div className="flex flex-col">
                <label>Usuario Creacion</label>
                <input className="border-solid border border-gray-300 "
                  type="date"
                  value={editUsuario.usuariocreacion}
                  onChange={(e) =>
                    setEditUsuario({ ...editUsuario, usuariocreacion: e.target.value })
                  }
                />
              </div>

              <div className="flex flex-col">
                <label>Usuario Modificacion</label>
                <input className="border-solid border border-gray-300 "
                  type="date"
                  value={editUsuario.usuariomodificacion}
                  onChange={(e) =>
                    setEditUsuario({ ...editUsuario, usuariomodificacion: e.target.value })
                  }
                />
              </div>
              {/* Agrega más campos según tu estructura de datos */}
              <button className="bg-blue-500 text-white p-2" type="submit">Guardar</button>
            </form>
          </div>
        </div>
      )}
      {/* Modal para crear usuario */}
      {modalCreate && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white w-[30vw] h-cover p-[3rem] flex flex-col rounded-lg gap-y-10">
            <button
              onClick={handleCloseCreateModal}
              className="bg-gray-500 text-white p-2 w-[5vw] flex items-center justify-center rounded-md hover:bg-blue-400 focus:outline-none "
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <form className="flex flex-col gap-5" onSubmit={handleSaveCreate}>
              <div className="flex flex-col">
                <label>Usuario</label>
                <input className="border-solid border border-gray-300 "
                  type="text"
                  value={newUsuario.usuario || ""}
                  onChange={(e) => setNewUsuario({ ...newUsuario, usuario: e.target.value })}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label>Email</label>
                <input className="border-solid border border-gray-300 "
                  type="text"
                  value={newUsuario.email || ""}
                  onChange={(e) => setNewUsuario({ ...newUsuario, email: e.target.value })}
                />
              </div>


              
              <div className="flex flex-col">
                <label>password</label>
                <input className="border-solid border border-gray-300 "
                  type="text"
                  value={newUsuario.password || ""}
                  onChange={(e) => setNewUsuario({ ...newUsuario, password: e.target.value })}
                />
              </div>

              <div className="flex flex-col">
  <label>Habilitado</label>
  <select  className="border-solid border border-gray-300 "
    value={newUsuario.habilitado || ""}
    onChange={(e) => setNewUsuario({ ...newUsuario, habilitado: e.target.value })}
  >
    <option value={1}>Habilitado</option>
    <option value={0}>Deshabilitado</option>
  </select>
</div>

              <div className="flex flex-col">
                <label>ID Rol</label>
                <input className="border-solid border border-gray-300 "
                  type="number"
                  value={newUsuario.idrol || ""}
                  onChange={(e) => setNewUsuario({ ...newUsuario, idrol: e.target.value })}
                />
              </div>


              <div className="flex flex-col">
                <label>Fecha Modificacion</label>
                <input className="border-solid border border-gray-300 "
                  type="date"
                  value={newUsuario.fechamodificacion || ""}
                  onChange={(e) => setNewUsuario({ ...newUsuario, fechamodificacion: e.target.value })}
                />
              </div>

              <div className="flex flex-col">
                <label>Usuario Creacion</label>
                <input className="border-solid border border-gray-300 "
                  type="date"
                  value={newUsuario.usuariocreacion || ""}
                  onChange={(e) => setNewUsuario({ ...newUsuario, usuariocreacion: e.target.value })}
                />
              </div>

              <div className="flex flex-col">
                <label>Usuario Modificacion</label>
                <input className="border-solid border border-gray-300 "
                  type="date"
                  value={newUsuario.usuariomodificacion || ""}
                  onChange={(e) => setNewUsuario({ ...newUsuario, usuariomodificacion: e.target.value })}
                />
              </div>
              {/* Agrega más campos según tu estructura de datos */}
              <button  className="bg-blue-500 text-white p-2" type="submit">Guardar</button>
            </form>
          </div>
        </div>
      )}
    
    </div>
  );
};

export default Usuarios;
