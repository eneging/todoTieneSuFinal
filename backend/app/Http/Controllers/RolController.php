<?php

namespace App\Http\Controllers;

use App\Models\Rol;
use Illuminate\Http\Request;

class RolController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Rol::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {    
        $rol = new Rol();
        $rol->rol = $request->rol;
        $rol->fechacreacion = $request->fechacreacion;
        $rol->fechamodificacion = $request->fechamodificacion;
        $rol->usuariocreacion = $request->usuariocreacion;
        $rol->usuariomodificacion =  $request->usuariomodificacion;
        $rol->save();

        return "nuevo rol creado";
    }

    /**
     * Display the specified resource.
     */
    public function show(Rol $rol , $id)
    {
        return Rol::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Rol $rol)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $rol = Rol::find($id);
        $rol->rol = $request->rol;
        $rol->fechacreacion = $request->fechacreacion;
        $rol->fechamodificacion = $request->fechamodificacion;
        $rol->usuariocreacion = $request->usuariocreacion;
        $rol->usuariomodificacion =  $request->usuariomodificacion;
        $rol->save();

        return "Rol actualizado";
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $rol = Rol::find($id);
        $rol->delete();

        return "rol eliminado";
    }
}
