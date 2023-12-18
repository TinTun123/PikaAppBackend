<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AdminUserController extends Controller
{
    public function index()
    {
        $users = User::paginate(10);
        return inertia('User/Index', [
            'users' => $users
        ]);
    }
}
