<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Categoria;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
    //
    public function index()
    {
        $categorias = Categoria::get();
        return response()->json(['data'=> $categorias, 'message' => "Lista de catgorias"], 200);
    }
    
}
