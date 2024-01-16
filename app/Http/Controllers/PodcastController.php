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
        }])->select('id', 'title', 'image', 'type', 'category_id', 'duration', 'price')
            ->when(request('type'), function ($query) {
                return $query->where('type', request('type'));
            });

        if (request('limit')) {
            $podcasts = $podcasts->take(intval(request('limit')))->get();
        } else {
            $podcasts = $podcasts->paginate(10);
        }

        return response()->json([
            'podcasts' => $podcasts
        ]);
    }


    public function show(Podcast $podcast)
    {
        return response()->json([
            'podcast' => $podcast
        ]);
    }
}
