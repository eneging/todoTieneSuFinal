<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BitacoraController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\EnlaceController;
use App\Http\Controllers\PaginaController;
use App\Http\Controllers\PersonaController;
use App\Http\Controllers\RolController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['api'])->group(function() {
  
    Route::post('/login', [AuthController::class, 'login']);
  
    Route::post('/register', [AuthController::class, 'register']);
  
    Route::get('/getaccount', [AuthController::class, 'getaccount']);
});

Route::controller(PersonaController::class)->group(function() {
    Route::get('/persona', 'index');
    Route::get('/persona/{id}', 'show');
    Route::post('/persona', 'store');
    Route::put('/persona/{id}', 'update');
    Route::delete('/persona/{id}', 'destroy');  


});

Route::controller(PaginaController::class)->group(function() {
    Route::get('/pagina', 'index');
    Route::get('/pagina/{id}', 'show');
    Route::post('/pagina', 'store');
    Route::put('/pagina/{id}', 'update');
    Route::delete('/pagina/{id}', 'destroy');  


});

Route::controller(RolController::class)->group(function() {
    Route::get('/rol', 'index');
    Route::get('/rol/{id}', 'show');
    Route::post('/rol', 'store');
    Route::put('/rol/{id}', 'update');
    Route::delete('/rol/{id}', 'destroy');  


});

Route::controller(Controller::class)->group(function() {
    Route::get('/usuario', 'index');
    Route::post('/usuario', 'store');
    Route::put('/usuario/{idusuario}', 'update');
    Route::delete('/usuario/{id}', 'destroy');
});

Route::controller(EnlaceController::class)->group(function() {
    Route::get('/enlace', 'index');
    Route::get('/enlace/{id}', 'show');
    Route::post('/enlace', 'store');
    Route::put('/enlace/{id}', 'update');
    Route::delete('/enlace/{id}', 'destroy');  


});

Route::controller(BitacoraController::class)->group(function() {
    Route::get('/bitacora', 'index');
    Route::get('/bitacora/{id}', 'show');
    Route::post('/bitacora', 'store');
    Route::put('/bitacora/{id}', 'update');
    Route::delete('/bitacora/{id}', 'destroy');  


});