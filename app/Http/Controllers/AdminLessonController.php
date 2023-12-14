<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreLessonRequest;
use App\Http\Requests\UpdateLessonRequest;
use App\Models\Video;
use Illuminate\Http\Request;

class AdminLessonController extends Controller
{
    public function store(StoreLessonRequest $request)
    {
        $attributes = $request->only('title', 'description', 'number', 'video', 'course_id');
        $attributes['type'] = 'vimeo';
        Video::create($attributes);
        return back();
    }

    public function update(Video $video, UpdateLessonRequest $request)
    {
        $attributes = $request->only('title', 'description', 'number', 'video', 'course_id');
        $video->update($attributes);
        return back();
    }
}
