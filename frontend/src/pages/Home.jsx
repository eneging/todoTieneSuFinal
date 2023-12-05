import { useEffect, useState } from "react"
import Profile from "../components/img/8497923-removebg-preview.png"


function Home() {

    const [userData, setUserData] = useState(null);


    useEffect(()=>{

const token =localStorage.getItem('token');
const userDatasString = localStorage.getItem('usuario');
const userData = JSON.parse(userDatasString);





setUserData(userData);
    },[]);



  return (
    <div className="flex justify-center h-[90vh] items-center py-4 bg-cover  bg-center bg-fixed bg-[url('https://picsum.photos/1920/1080')]">

{userData ? (
       <>

        <div className="flex">

         <div className="flex flex-col justify-center items-center p-[5vh] bg-slate-700 rounded ">
            <h1 className="text-3xl text-white">Informacion Personal</h1>
            <p className="text-white">Basic info, like your name and photo</p>
            <img className="w-[40vh] brightness-75" src={Profile}></img>
            </div> 

         <div>

<div className="bg-white border-solid border-2 border-gray-400 h-cover  w-[45vw]">
<div className=" h-[5vh] p-[5vh] flex justify-between ">
<div >
<h1 className=" font-bold text-xl  ">Profile</h1>
<p className="text-small">Some info may be visible to other people
</p>
</div>

<div className="border border-solid rounded-xl  h-[5vh] p-4 flex justify-center items-center">
    <a href="/edit">edit</a></div>

</div>

<div className="py-14 ">

<div className="border-b-4 border-gray-300 ...  border-solid h-[10vh] flex items-center px-[1vw]  justify-around" >
    
    <div className="w-[50%] flex items-center gap-5  "> 
    <div className="bg-gray-700 p-2 rounded text-white">Usuario</div>
     <div> {userData.usuario} </div> </div> 

    <div className="w-[50%]  flex items-center gap-5" >  
    <div className="bg-gray-700 p-2 rounded text-white">
      Contrasena</div>
     <div>
      {userData.contrasena ? (<div> {userData.contrasena} </div>) : 'xxxxxxxxxxxxx'}
      
      
      
      </div>
     
      </div>
    
    
    </div>


<div className="border-b-4 border-gray-200 ...  border-solid h-[10vh] flex items-center px-[1vw] justify-around"> 
<div className="w-[50%] flex items-center gap-5 ">
<div className="bg-gray-700 p-2 rounded text-white">Correo</div>
  <div> {userData.email} </div>
  </div>

<div className="w-[50%] " >
  
<div className="w-[50%]  flex items-center gap-5" >  
    <div className="bg-gray-700 p-2 rounded text-white">Habilitado</div>
     <div> {userData.habilitado === 1 ? (
     <div className="bg-green-500 text-white p-2 rounded-xl">Activo</div>)
     : 
     <div className="bg-red-500 text-white p-2 rounded-xl">Desactivado</div> }   </div>
     
      </div>
   
   </div> </div>

<div className="border-b-4 border-gray-200 ...  border-solid h-[10vh] flex items-center px-[1vw] justify-around"> 


<div className="w-[50%]  flex items-center gap-5" >  
    <div className="bg-gray-700 p-2 rounded text-white">idRol</div>
    {userData.idrol ? (<div> {userData.contrasena} </div>) : 'xxxxxxxxxxxxx'} </div>

     <div className="w-[50%]  flex items-center gap-5" >  
    <div className="bg-gray-700 p-2 rounded text-white">Fecha Modificacion</div>
    {userData.fechamodificacion
 ? (<div> {userData.fechamodificacion
 } </div>) : 'xxxxxxxxxxxxx'}</div>


</div>



<div className=" h-[7vh] flex items-center px-[1vw] justify-around">

   <div className="w-[50%]  flex items-center gap-5" >  
    <div className="bg-gray-700 p-2 rounded text-white">usuarioCreacion</div>
    {userData.usuariocreacion

 ? (<div> {userData.usuariocreacion

 } </div>) : 'xxxxxxxxxxxxx'} </div> 

     
     <div className="w-[50%]  flex items-center gap-5" >  
    <div className="bg-gray-700 p-2 rounded text-white">fechamodificacion</div>
    {userData.usuariomodificacion

 ? (<div> {userData.usuariomodificacion

 } </div>) : 'xxxxxxxxxxxxx'} </div> 


</div>





</div>



</div>

         </div>

        </div>
    
    </>
    ) : (
        <p>Cargando datos del usuario...</p>
      )}

    </div>
  )
}

export default Home