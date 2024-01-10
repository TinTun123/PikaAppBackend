<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCourseRequest;
use App\Http\Requests\UpdateCourseRequest;
use App\Models\Category;
use App\Models\Course;
use App\Models\Podcast;
use App\Models\Video;
use Illuminate\Http\Request;

class AdminCourseController extends Controller
{
    public function index()
    {
        $courses = Course::with('category')->withCount('modules')->latest()->paginate(10);
        return inertia('Course/Index', [
            'courses' => $courses,
        ]);
    }

    public function create()
    {
        $categories = Category::where('type', 'course')->select('id', 'name')->get();
        return inertia('Course/Form', [
            'categories' => $categories,
        ]);
    }


    public function store(StoreCourseRequest $request)
    {
        $attributes = $request->only('title', 'description', 'instructor', 'category_id', 'price');
        $attributes['image'] = $request->file('image')->store('course');
        $course = Course::create($attributes);

        return redirect()->route('courses.edit', $course->id);
    }

    public function edit(Course $course)
    {
        $categories = Category::where('type', 'course')->select('id', 'name')->get();
        return inertia('Course/Form', [
            'categories' => $categories,
            'course' => $course->load(['modules' => function ($query) {
                $query->with(['videos' => function ($query) {
                    return $query->orderBy('number');
                }])->orderBy('number');
            }])
        ]);
    }

    public function update(Course $course, UpdateCourseRequest $request)
    {
        $attributes = $request->only('title', 'description', 'instructor', 'price');
        $course->update($attributes);
        return back();
    }

    public function togglePopular(Course $course)
    {
        $course->update(['popular' => !$course->popular]);
        return back();
    }

    public function toggleRecommended(Course $course)
    {
        $course->update(['recommended' => !$course->recommended]);
        return back();
    }


}
