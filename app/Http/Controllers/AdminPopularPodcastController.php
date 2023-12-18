<?php

namespace App\Http\Controllers;

use App\Models\Audio;
use Illuminate\Http\Request;

class AdminPopularPodcastController extends Controller
{
    public function index()
    {
        $podcasts = Audio::with('category')->where('popular', true)->get();
        return inertia('Popular/Index', [
            'podcasts' => $podcasts,
        ]);
    }
}
