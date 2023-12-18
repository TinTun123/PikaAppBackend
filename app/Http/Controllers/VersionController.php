<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVersionRequest;
use App\Http\Requests\UpdateVersionRequest;
use App\Models\Version;

class VersionController extends Controller
{
    public function index()
    {
        return response()->json([
            'version' => Version::first()->version,
        ]);
    }

}
