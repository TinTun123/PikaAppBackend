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
        return response()->json([
            'courses' => Course::withCount('videos')->latest()->paginate(10),
        ]);
    }

    public function show(Course $course)
    {
        return response()->json([
            'course' => $course->load(['videos' => function($query){
                return $query->select('id','title','description','course_id','number');
            }]),
        ]);
    }

}
