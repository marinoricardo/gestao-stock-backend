<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::post('login', 'API\AuthController@login');
Route::get('me', 'API\AuthController@me');

Route::get('roles', 'API\RoleController@index');




/// Categoiras
Route::resource('produtos', 'API\ProdutoController');  
Route::get('categorias', 'API\CategoriaController@index');  
Route::resource('utilizadores', 'API\UtilizadorController');


// Route::group(['middleware' => ['auth.jwt']], function () {
//     Route::resource('produtos', 'API\ProdutoController');  
//     Route::get('categorias', 'API\CategoriaController@index');  
//     Route::resource('utilizadores', 'API\UtilizadorController');
// });