<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    //
    protected $fillable = [
        'name', 
    ];

    public function utilizadores()
    {
        return $this->hasMany(\App\Models\Utilizador::class);
    }
    public function users()
    {
        return $this->hasMany(\App\User::class);
    }
}
