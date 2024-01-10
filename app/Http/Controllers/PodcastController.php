<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePodcastRequest;
use App\Http\Requests\UpdatePodcastRequest;
use App\Models\Podcast;

class PodcastController extends Controller
{

    public function index()
    {
        $podcasts = Podcast::with(['category' => function ($query) {
            return $query->select('name', 'id');
        }])->select('title', 'image','type', 'category_id', 'time', 'price')
            ->when(request('type'),function($query){
                return $query->where('type',request('type'));
            })
            ->paginate(10);
        return response()->json([
            'podcasts' => $podcasts
        ]);
    }


}
