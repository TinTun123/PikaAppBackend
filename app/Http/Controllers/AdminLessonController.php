<?php

namespace App\Http\Controllers;

use App\helpers\VimeoHelper;
use App\Http\Requests\StoreLessonRequest;
use App\Http\Requests\UpdateLessonRequest;
use App\Models\Lesson;
use App\Traits\ImageDeleter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Owenoj\LaravelGetId3\GetId3;

class AdminLessonController extends Controller
{
    use ImageDeleter;

    private $vimeoHelper;

    public function __construct(VimeoHelper $vimeoHelper)
    {
        $this->vimeoHelper = $vimeoHelper;
    }

    public function store(StoreLessonRequest $request)
    {
        $moduleExist = Lesson::where('module_id', $request->module_id)->where('number', $request->number)->first();
        if ($moduleExist) {
            return back()->withErrors(['number' => 'Lesson with the same number already exists!']);
        }

        $attributes = $request->only('title', 'description', 'number', 'number_as_text', 'file', 'type', 'course_id', 'module_id');


        try {
            $duration = $this->getFileDuration($request);
            $attributes['duration'] = $duration;
        } catch (\Exception $e) {
            return back()->withErrors(['file' => $e->getMessage()]);
        }

        Lesson::create($attributes);
        return back();
    }

    public function getFileDuration($request)
    {
        if ($request->type === 'video') {
            $response = $this->vimeoHelper->getVideoDuration($request->file);
            if ($response['status'] !== 200) {
                throw new \Exception($response['error']);
            } else {
                return $response['duration'];
            }
        } else {
            try {
                $track = GetId3::fromDiskAndPath('public', $request->file);
                return $track->getPlaytimeSeconds();
            } catch (\Exception $e) {
                throw new \Exception($e->getMessage());
            }
        }
    }

    public function update(Lesson $lesson, UpdateLessonRequest $request)
    {
        if ($lesson->number !== $request->number) {
            $videoExist = Lesson::where('module_id', $lesson->module_id)->where('number', $request->number)->first();
            if ($videoExist) {
                return back()->withErrors(['number' => 'Lesson with the same number already exists!']);
            }
        }
        $attributes = $request->only('title', 'description', 'type', 'file', 'number_as_text', 'number', 'course_id', 'module_id');

        try {
            $duration = $this->getFileDuration($request);
            $attributes['duration'] = $duration;
        } catch (\Exception $e) {
            return back()->withErrors(['file' => $e->getMessage()]);
        }

        $lesson->update($attributes);
        return back();
    }

    public function destroy(Lesson $lesson)
    {
        $lesson->delete();
        if ($lesson->type === 'podcast') {
            $this->deleteImage($lesson->file);
        }

        return back();
    }
}
