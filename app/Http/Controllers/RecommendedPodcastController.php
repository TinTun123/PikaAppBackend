<?php

namespace App\Http\Controllers;

use App\Models\Podcast;
use Illuminate\Http\Request;

class RecommendedPodcastController extends Controller
{
    public function index()
    {
        $podcasts = Podcast::with(['category' => function ($query) {
            return $query->select('name', 'id');
        }])->select('id', 'title', 'image', 'category_id', 'type', 'recommended', 'duration', 'price')
            ->where('recommended', true);

        if (request('limit')) {
            $podcasts = $podcasts->take(intval(request('limit')))->get();
        } else {
            $podcasts = $podcasts->paginate(10);
        }


        return response()->json([
            'podcasts' => $podcasts
        ]);
    }
}
