<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTestimonialRequest;
use App\Models\Course;
use App\Models\Testimonial;
use App\Traits\ImageDeleter;
use Illuminate\Http\Request;

class AdminTestimonialController extends Controller
{
    use ImageDeleter;
    public function index(Course $course)
    {
        return inertia('Testimonial/Index', [
            'course' => $course,
            'testimonials' => Testimonial::where('course_id', $course->id)->latest('id')->get(),
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


    public function update(Testimonial $testimonial, Request $request)
    {
        $attributes = $request->only('type', 'published');
        if ($request->type === 'video') {
            $attributes['file'] = $request->file;
            if ($request->type !== $testimonial->type) {
                $this->deleteImage($testimonial->file);
            }
        } else {
            if ($request->file('file')) {
                $attributes['file'] = $request->file('file')->store('testimonials');
                $this->deleteImage($request->file);;
            }
        }

        $testimonial->update($attributes);

        return back();
    }


    public function destroy(Testimonial $testimonial)
    {
        $testimonial->delete();
        if ($testimonial->type === 'photo') {
            $this->deleteImage($testimonial->file);
        }
        return back();
    }


    public function togglePublish(Testimonial $testimonial)
    {
        $testimonial->update(['published' =>  !$testimonial->published]);

        return back();
    }
}
