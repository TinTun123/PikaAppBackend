<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Lesson;
use App\Models\WatchedLesson;

class LessonController extends Controller
{

    public function show(Lesson $video)
    {
        $course = Course::where('id', $video->course_id)->first();
        $user = auth()->user();

        $lesson = $video
            ->makeHiddenIf(!$course->hasAccess($user), ['video', 'type', 'duration'])
            ->loadCount(['watched_users as watched' => function ($query) use ($user) {
                return $query->where('user_id', $user->id);
            }]);

        $lesson->watched = boolval($lesson->watched);
        return response()->json([
            'lesson' => $lesson
        ]);
    }

    public function toggleLessonWatched(Lesson $video)
    {
        $hasWatched = WatchedLesson::where('video_id', $video->id)->where('user_id', auth()->id())->first();
        if ($hasWatched) {
            $video->watched_users()->detach(auth()->id());
            return response()->json([
                'message' => 'You have remove this lesson from watched'
            ]);
        } else {
            $video->watched_users()->attach(auth()->id());
            return response()->json([
                'message' => 'You have marked this lesson as watched'
            ]);
        }
    }
}
