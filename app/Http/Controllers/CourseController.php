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
            'course' => $course->load([
                'modules' => function ($query) {
                    return $query->orderBy('number');
                }, 'modules.videos' => function ($query) {
                    return $query->select('title', 'id', 'description', 'course_id', 'module_id', 'number')->orderBy('number');
                }, 'testimonials' => function ($query) {
                    return $query->where('published', true);
                }
            ]),
        ]);
    }
}
