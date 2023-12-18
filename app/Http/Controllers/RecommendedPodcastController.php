<?php

namespace App\Http\Controllers;

use App\Models\Audio;
use Illuminate\Http\Request;

class RecommendedPodcastController extends Controller
{
    public function index()
    {
        $podcasts = Audio::with(['category' => function ($query) {
            return $query->select('name', 'id');
        }])->select('title', 'image', 'category_id', 'time', 'price')->where('recommended',true)->get();
        return response()->json([
            'podcasts' => $podcasts
        ]);
    }
}
