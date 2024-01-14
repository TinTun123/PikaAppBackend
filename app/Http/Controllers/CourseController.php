<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\CourseUser;
use Illuminate\Support\Facades\Request;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $courses = Course::with('category')
            ->withCount('videos', 'modules')
            ->filterByCategory()
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

    public function searchCourse()
    {
        $courses = [];
        if (request('search')) {
            $courses = Course::select('title', 'id')->where('title', 'like', '%' . request('search') . '%')->paginate(20);
        }
        return response()->json([
            'courses' => $courses,
        ]);
    }

    public function show(Course $course)
    {

        $courseDetail = $course
            ->loadCount(['saved_users as saved' => function ($query) {
                return $query->where('user_id', auth()->id());
            }])
            ->load([

                'modules' => function ($query) {
                    return $query->orderBy('number');
                }, 'modules.videos' => function ($query) {
                    return $query->select('duration', 'title', 'id', 'description', 'course_id', 'module_id', 'number')->orderBy('number')->withCount(['watched_users as watched' => function ($query) {
                        return $query->where('user_id', auth()->id());
                    }])->withCasts(['watched' => 'boolean']);
                }, 'testimonials' => function ($query) {
                    return $query->where('published', true);
                }
            ])->setAppends(['totalVideoLength']);
        $courseDetail->saved = boolval($courseDetail->saved);
        return response()->json([
            'hasAccess' => $course->hasAccess(auth()->user()),
            'course' => $courseDetail,
        ]);
    }

    public function buy(Course $course)
    {
        if (CourseUser::where('course_id', $course->id)->where('user_id', auth()->id())->exists()) {
            return response()->json([
                'message' => 'You already bought this course',
            ]);
        }
        $course->students()->attach(auth()->id());
        return response()->json([
            'message' => 'You have bought the course successfully!',
        ]);
    }
}
