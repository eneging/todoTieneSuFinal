<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\User;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Hash;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;


    public function index (){


        return User::all();
    }

    public function destroy ($id){

        $usuarios = User::find($id);
        $usuarios->delete();

        return "Usuario eliminado";
        
    }

    
    public function update(Request $request, $id)
    { 
        
        $usuarios = User::find($id); 
        $usuarios->idpersona = $request->idpersona;
        $usuarios->usuario = $request->usuario;
         $usuarios->email = $request->email;
         $usuarios->idrol = $request->idrol;
        
         $usuarios->fechamodificacion = $request->fechamodificaion;
         $usuarios->usuariocreacion = $request->usuariocreacion;
         $usuarios->usuariomodificacion = $request->usuariomodificacion;
         $usuarios->save();
 
         return "usuario actualizado";
       
    }


    public function store(Request $request)
    {
        $usuario =  new User; 

        $usuario->idpersona = $request->idpersona;
        $usuario->usuario = $request->usuario;
         $usuario->email = $request->email;
         $usuario->idrol = $request->idrol;
         $usuario->habilitado = $request->habilitado;
         $usuario->password = Hash::make($request->get('password'));
         $usuario->fechamodificacion = $request->fechamodificaion;
         $usuario->usuariocreacion = $request->usuariocreacion;
         $usuario->usuariomodificacion = $request->usuariomodificacion;
         $usuario->save();
 
         return "usuario creado";

    }


}
