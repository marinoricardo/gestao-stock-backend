<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    //
    function index()
    {
        $roles = Role::get();

        return response()->json($roles);
    }
}
