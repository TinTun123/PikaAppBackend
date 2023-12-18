<?php

namespace App\Http\Controllers;

use App\Models\Audio;
use App\Models\FavoritePodcast;
use Illuminate\Http\Request;

class FavoritePodcastController extends Controller
{

    public function index()
    {
        $user = auth()->user();
        $podcasts = $user->favoritePodcasts()->paginate(10);
        return response()->json([
            'podcasts' => $podcasts
        ]);
    }

    public function toggleFavorite($id)
    {
        $isFavorite = FavoritePodcast::where('audio_id', $id)->where('user_id', auth()->id())->first();
        if ($isFavorite) {
            $isFavorite->delete();
            return response()->json([
                'message' => 'You unliked this podcast'
            ]);
        } else {
            FavoritePodcast::create(['user_id' => auth()->id(),'audio_id' => $id]);
            return response()->json([
                'message' => 'You liked this podcast'
            ]);
        }
    }
}
