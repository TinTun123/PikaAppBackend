<?php

namespace App\Http\Controllers;

use App\Models\Version;
use Illuminate\Http\Request;

class AdminVersionController extends Controller
{
    public function index()
    {
        $version = Version::first()->version;
        return inertia('Version/Index',[
            'version' => $version
        ]);
    }

    public function update(Request $request)
    {
        $version = Version::first();
        $version->update(['version' => $request->version]);
        return back();
    }
}
