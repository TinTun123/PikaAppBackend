<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class PointController extends Controller
{
    public function add(Request $request)
    {
        $request->validate([
            'point' => 'required|integer|min:0|not_in:',
        ]);

        $user = User::where('id', auth()->id())->first();

        $user->update(['point'  => $user->point + request('point')]);
        return response()->json([
            'message' => 'Your point is added!',
        ]);
    }

    public function subtract(Request $request)
    {
        $request->validate([
            'point' => 'required|integer|min:0|not_in:',
        ]);

        $user = User::where('id', auth()->id())->first();

        if ($request->point <= $user->point) {
            $user->update(['point'  => $user->point - request('point')]);
            return response()->json([
                'message' => 'Your point is subtracted!',
            ]);
        } else {
            return response()->json([
                'error' => true,
                'message' => 'Your balance is insufficient',
            ], 422);
        }
    }
}
