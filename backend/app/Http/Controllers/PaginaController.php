<?php

namespace App\Http\Controllers;

use App\Models\Pagina;
use Illuminate\Http\Request;

class PaginaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Pagina::all();
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
        $pagina = new Pagina();


        $pagina->fechacreacion = $request->fechacreacion;
        $pagina->fechamodificacion = $request->fechamodificacion;
        $pagina->usuariocreacion = $request->usuariocreacion;
        $pagina->usuariomoficacion = $request->usuariomoficacion;
        $pagina->url = $request->url;
        $pagina->estado = $request->estado;
        $pagina->nombre = $request->nombre;
        $pagina->descripcion = $request->descripcion;
        $pagina->icono = $request->icono;
        $pagina->tipo = $request->tipo;

        $pagina->save();

        return "nueva pagina creada";
        
    }

    /**
     * Display the specified resource.
     */
    public function show(Pagina $pagina, $id)
    {
        return Pagina::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pagina $pagina)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $pagina = Pagina::find($id);
        $pagina->fechacreacion = $request->fechacreacion;
        $pagina->fechamodificacion = $request->fechamodificacion;
        $pagina->usuariocreacion = $request->usuariocreacion;
        $pagina->usuariomoficacion = $request->usuariomoficacion;
        $pagina->url = $request->url;
        $pagina->estado = $request->estado;
        $pagina->nombre = $request->nombre;
        $pagina->descripcion = $request->descripcion;
        $pagina->icono = $request->icono;
        $pagina->tipo = $request->tipo;

        $pagina->save();

        return " pagina actualizada";
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $pagina = Pagina::find($id);
        $pagina->delete();

        return 'pagina eliminada';
    }
}
