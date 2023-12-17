<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVideoRequest;
use App\Http\Requests\UpdateVideoRequest;
use App\Models\Video;

class VideoController extends Controller
{

    public function show(Video $video)
    {
        return response()->json([
            'lesson' => $video,
        ]);
    }
}
