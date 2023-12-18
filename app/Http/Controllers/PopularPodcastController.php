<?php

namespace App\Http\Controllers;

use App\Models\Audio;
use App\Models\PopularPodcast;

class PopularPodcastController extends Controller
{
    public function index()
    {
        $podcasts = Audio::with(['category' => function($query){
            return $query->select('name','id');
        }])->select('title','image','category_id','time','price')->where('popular',true)->get();
        return response()->json([
            'podcasts' => $podcasts
        ]);
    }
}
