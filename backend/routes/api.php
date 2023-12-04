<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PersonaController;
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