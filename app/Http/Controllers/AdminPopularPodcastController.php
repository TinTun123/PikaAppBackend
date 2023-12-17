<?php

namespace App\Http\Controllers;

use App\Models\Audio;
use App\Models\PopularPodcast;
use Illuminate\Http\Request;

class AdminPopularPodcastController extends Controller
{
    public function index()
    {
        $popularPodcastIds = PopularPodcast::first()->podcast_ids;
        $podcasts = [];
        if(!isset($popularPodcastIds)){
            $podcasts = Audio::whereIn($popularPodcastIds)->paginate(10);
        }
        return inertia('Popular/Index',[
            'podcasts' => $podcasts,
        ]);
    }
}
