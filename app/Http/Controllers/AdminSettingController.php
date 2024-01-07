<?php

namespace App\Http\Controllers;

use App\Models\Version;
use Illuminate\Http\Request;

class AdminSettingController extends Controller
{
    public function index()
    {
        return inertia('Settings/Index');
    }


    public function getVersion()
    {
        return inertia('Settings/Index');
    }

    public function getTerm()
    {
        return inertia('Settings/Index');
    }
}
