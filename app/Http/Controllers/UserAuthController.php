<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRegisterRequest;
use App\Models\User;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;
use Nette\Schema\ValidationException;

class UserAuthController extends Controller
{
    public function register(UserRegisterRequest $request)
    {
        $attributes = $request->only('name', 'email', 'password');

        User::create($attributes);

        if (!auth()->attempt($attributes)) {
            throw new ValidationException('Sorry , User create failed!');
        }

        $token = $this->generateToken();

        return response()->json([
            'token' => $token,
            'user' => auth()->user(),
        ]);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (!auth()->attempt($request->only('email', 'password'))) {
            throw new AuthenticationException();
        }

        $token = $this->generateToken();
        return response()->json([
            'token' => $token,
            'user' => auth()->user(),
        ]);
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();
        return response()->json([
            'success' => true,
        ], 200);
    }

    public function getUser()
    {
        return response()->json([
            'user' => auth()->user(),
        ],);
    }

    public function generateToken()
    {
        return auth()->user()->createToken(env('TOKEN'))->plainTextToken;
    }
}
