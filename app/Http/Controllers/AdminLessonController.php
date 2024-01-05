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
        $moduleExist = Video::where('module_id', $request->module_id)->where('number', $request->number)->first();
        if ($moduleExist) {
            return back()->withErrors(['number' => 'Video with the same number already exists!']);
        }
        $attributes = $request->only('title', 'description', 'number', 'video', 'course_id', 'module_id');
        $attributes['type'] = 'vimeo';
        Video::create($attributes);
        return back();
    }

    public function update(Video $video, UpdateLessonRequest $request)
    {
        if ($video->number !== $request->number) {
            $videoExist = Video::where('module_id', $video->module_id)->where('number', $request->number)->first();
            if ($videoExist) {
                return back()->withErrors(['number' => 'Video with the same number already exists!']);
            }
        }
        $attributes = $request->only('title', 'description', 'number', 'video', 'course_id', 'module_id');
        $video->update($attributes);
        return back();
    }

    public function destroy(Video $video)
    {
        $video->delete();
        return back();
    }
}
