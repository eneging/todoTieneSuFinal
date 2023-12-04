<?php

namespace App\Http\Controllers;

use App\Models\Persona;
use Illuminate\Http\Request;

class PersonaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Persona::all();
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
         $persona = new Persona;
         $persona->primernombre = $request->primernombre;
         $persona->segundonombre = $request->segundonombre;
         $persona->primerapellido = $request->primerapellido;
         $persona->segundoapellido = $request->segundoapellido;
         $persona->fechacreacion = $request->fechacreacion;
         $persona->fechamodificacion = $request->fechamodificacion;
         $persona->usuariocreacion = $request->usuariocreacion;
         $persona->usuariomodificacion = $request->usuariomodificacion;

         $persona->save();

         return "nuevo persona creada";


    }

    /**
     * Display the specified resource.
     */
    public function show(Persona $persona , $id)
    {
        $persona = Persona::fin($id);
        return $persona;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Persona $persona)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $persona = Persona::find($id);
        $persona->primernombre = $request->primernombre;
        $persona->segundonombre = $request->segundonombre;
        $persona->primerapellido = $request->primerapellido;
        $persona->segundoapellido = $request->segundoapellido;
        $persona->fechacreacion = $request->fechacreacion;
        $persona->fechamodificacion = $request->fechamodificacion;
        $persona->usuariocreacion = $request->usuariocreacion;
        $persona->usuariomodificacion = $request->usuariomodificacion;

        $persona->save();

        return "Persona actualizada";

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $persona = Persona::find($id);
        $persona->delete();

        return "Persona eliminada";
    }
}
