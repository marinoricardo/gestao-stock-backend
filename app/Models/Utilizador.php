<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Utilizador extends Model
{
    //
    protected $fillable = [
        'name',  'email', 'role_id', 'user_id'
    ];

    protected $casts = [
        'id' => 'integer',
        'name' => 'string',
        'email' => 'string',
        'role_id' => 'integer',
        'user_id' => 'integer',
    ];
}
