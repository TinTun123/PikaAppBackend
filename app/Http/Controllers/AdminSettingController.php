<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use App\Models\Version;
use Illuminate\Http\Request;

class AdminSettingController extends Controller
{

    public function getVersion()
    {
        $version = Setting::select('version', 'id')->first();
        return inertia('Settings/Index', [
            'version' => $version
        ]);
    }

    public function getTerm()
    {
        $terms = Setting::select('terms', 'id')->first();
        return inertia('Settings/Index', [
            'terms' => $terms
        ]);
    }

    public function updateVersion()
    {
        $version = Setting::first();
        $version->update(['version' => request('version')]);
        return back();
    }

    public function updateTerms()
    {
        $terms = Setting::first();
        $terms->update(['terms' => request('terms')]);
        return back();
    }
}
