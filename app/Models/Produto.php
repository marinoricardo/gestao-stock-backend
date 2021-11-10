<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Produto extends Model
{
    //

    function categorias()
    {
        return $this->belongsTo(\App\Models\Categoria::class, 'categoria_id');
    }
}
