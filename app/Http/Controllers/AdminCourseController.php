<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCourseRequest;
use App\Http\Requests\UpdateCourseRequest;
use App\Models\Course;
use App\Models\Video;
use Illuminate\Http\Request;

class AdminCourseController extends Controller
{
    public function index()
    {
        $courses = Course::paginate(10);
        return inertia('Course/Index', [
            'courses' => $courses,
        ]);
    }

    public function create()
    {
        return inertia('Course/Form');
    }


    public function store(StoreCourseRequest $request)
    {
        $attributes = $request->only('title', 'description', 'instructor', 'price');
        $attributes['image'] = $request->file('image')->store('course');
        $course = Course::create($attributes);

        return redirect()->route('courses.edit', $course->id);
    }

    public function edit(Course $course)
    {
        return inertia('Course/Form', [
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
}
