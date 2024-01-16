<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCourseRequest;
use App\Http\Requests\UpdateCourseRequest;
use App\Models\Category;
use App\Models\Course;
use App\Models\Podcast;
use App\Models\Lesson;
use App\Traits\ImageDeleter;
use Illuminate\Http\Request;

class AdminCourseController extends Controller
{
    use ImageDeleter;

    public function index()
    {
        $courses = Course::with('category')->withCount('modules', 'lessons', 'students')->latest()->paginate(9);
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
        $attributes = $request->only('title', 'info', 'outline', 'recommended', 'popular', 'author', 'category_id', 'fee', 'recommendation_text', 'attraction_text');
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
                $query->with(['lessons' => function ($query) {
                    return $query->orderBy('number');
                }])->orderBy('number');
            }])
        ]);
    }

    public function update(Course $course, UpdateCourseRequest $request)
    {
        $attributes = $request->only('title', 'info', 'outline', 'popular', 'recommended', 'author', 'category_id', 'fee', 'recommendation_text', 'attraction_text');
        $course->update($attributes);
        return back();
    }


    public function destroy(Course $course)
    {

        $course->delete();
        $this->deleteImage($course->image);

        $course->modules->each(function ($module) {
            $module->lessons->each(function ($lesson) {
                if ($lesson->type === 'podcast') {
                    $this->deleteImage($lesson->file);
                }
            });
            $module->lessons()->delete();
        });

        $course->testimonials->each(function ($testimonial) {
            if ($testimonial->type === 'photo') {
                $this->deleteImage($testimonial->file);
            }
        });

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
