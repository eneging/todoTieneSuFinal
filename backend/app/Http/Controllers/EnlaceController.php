<?php

namespace App\Http\Controllers;

use App\Models\Enlace;
use Illuminate\Http\Request;

class EnlaceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Enlace::all();
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
        $enlace = new Enlace; 

       $enlace->idpagina = $request->idpagina;
       $enlace->idrol = $request->idrol;
        $enlace->descripcion = $request->descripcion;
        $enlace->fechacreacion = $request->fechacreacion;
        $enlace->fechamodificacion = $request->fechamodificaion;
        $enlace->usuariocreacion = $request->usuariocreacion;
        $enlace->usuariomodificacion = $request->usuariomodificacion;
        $enlace->save();

        return "nuevo enlace creado";
    }

    /**
     * Display the specified resource.
     */
    public function show(Enlace $enlace , $id)
    {
        return Enlace::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Enlace $enlace)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $enlace =  Enlace::find($id); 

        $enlace->idpagina = $request->idpagina;
        $enlace->idrol = $request->idrol;
         $enlace->descripcion = $request->descripcion;
         $enlace->fechacreacion = $request->fechacreacion;
         $enlace->fechamodificacion = $request->fechamodificaion;
         $enlace->usuariocreacion = $request->usuariocreacion;
         $enlace->usuariomodificacion = $request->usuariomodificacion;
         $enlace->save();
 
         return "Enlace actualizado";

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $enlace = Enlace::find($id);
        $enlace->delete();

        return "elimininado";
    }
}
