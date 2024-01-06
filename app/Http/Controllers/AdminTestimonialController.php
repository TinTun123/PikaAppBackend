<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTestimonialRequest;
use App\Models\Course;
use App\Models\Testimonial;
use Illuminate\Http\Request;

class AdminTestimonialController extends Controller
{
    public function index(Course $course)
    {
        return inertia('Testimonial/Index', [
            'course' => $course,
            'testimonials' => Testimonial::where('course_id', $course->id)->latest()->get(),
        ]);
    }

    public function store(StoreTestimonialRequest $request)
    {
        $attributes = $request->only('type', 'published', 'course_id');

        if ($request->type === 'video') {
            $attributes['file'] = $request->file;
        }
        if ($request->type === 'photo') {
            $attributes['file'] = $request->file->store('testimonials');
        }
        Testimonial::create($attributes);
        return back();
    }


    public function update()
    {
    }

    public function togglePublish(Testimonial $testimonial)
    {
        $testimonial->update(['published' =>  !$testimonial->published]);

        return back();
    }
}
