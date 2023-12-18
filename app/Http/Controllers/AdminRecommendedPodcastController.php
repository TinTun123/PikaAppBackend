<?php

namespace App\Http\Controllers;

use App\Models\Audio;
use Illuminate\Http\Request;

class AdminRecommendedPodcastController extends Controller
{
    public function index()
    {
        return inertia('Recommended/Index',[
            'podcasts' => Audio::with('category')->where('recommended' , true)->get(),
        ]);
    }
}
