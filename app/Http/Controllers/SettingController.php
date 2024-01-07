<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSettingRequest;
use App\Http\Requests\UpdateSettingRequest;
use App\Models\Setting;

class SettingController extends Controller
{

    public function getVersion()
    {
        return response()->json([
            'version' => Setting::select('version')->first()->version,
        ]);
    }

    public function getTerms()
    {
        return response()->json([
            'terms' => Setting::select('terms')->first()->terms,
        ]);
    }

  
}
