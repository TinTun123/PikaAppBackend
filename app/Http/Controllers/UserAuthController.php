<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRegisterRequest;
use App\Mail\PasswordResetCodeMail;
use App\Models\User;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
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
            return response()->json([
                'message' => 'Your password is incorrect!'
            ], 401);
        }

        $token = $this->generateToken();
        return response()->json([
            'token' => $token,
            'user' => auth()->user(),
        ]);
    }


    public function forgetPassword(Request $request)
    {
        $request->validate([
            'code' => 'required',
            'email' => 'required|exists:users,email',
        ]);
        cache()->put($request->email, $request->code, now()->addMinutes(10));

        Mail::to($request->email)->send(new PasswordResetCodeMail($request->code));

        return response()->json([
            'success' => true,
            'message' => 'check your mail!'
        ]);
    }

    public function resetPassword(Request $request)
    {
        $request->validate([
            'code' => 'required',
            'email' => 'required|exists:users,email',
            'password' => 'required|min:6',
        ]);

        if (cache()->get($request->email) != $request->code) {
            return response()->json([
                'success' => false,
                'message' => 'Code is invalid',
            ], 400);
        }

        $user = User::where('email', $request->email)->first();
        $user->password = bcrypt($request->password);
        $user->save();
        cache()->forget($request->email);

        return response()->json([
            'success' => true,
            'message' => 'Password reset successfully',
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
