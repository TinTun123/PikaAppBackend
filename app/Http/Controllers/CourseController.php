<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCourseRequest;
use App\Http\Requests\UpdateCourseRequest;
use App\Models\Course;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $courses = Course::with('category')
            ->withCount('videos', 'modules')
            ->filterByPopular()
            ->filterByRecommended()
            ->latest();

        if (request('limit')) {
            $courses = $courses->take(intval(request('limit')))->get();
        } else {
            $courses = $courses->paginate(10);
        }
        return response()->json([
            'courses' => $courses,
        ]);
    }

    public function show(Course $course)
    {

        return response()->json([
            'hasAccess' => $course->hasAccess(auth()->user()),
            'course' => $course->load([
                'modules' => function ($query) {
                    return $query->orderBy('number');
                }, 'modules.videos' => function ($query) {
                    return $query->select('duration', 'title', 'id', 'description', 'course_id', 'module_id', 'number')->orderBy('number')->withCount(['watched_users as watched' => function ($query) {
                        return $query->where('user_id', auth()->id());
                    }])->withCasts(['watched' => 'boolean']);
                }, 'testimonials' => function ($query) {
                    return $query->where('published', true);
                }
            ])->setAppends(['totalVideoLength']),
        ]);
    }
}
