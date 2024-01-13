<?php

namespace App\Models;

use Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Course extends Model
{
    use HasFactory;

    protected $casts = [
        'popular' => 'boolean',
        'recommended' => 'boolean'
    ];

    public function videos()
    {
        return $this->hasMany(Video::class);
    }

    public function getImageAttribute()
    {
        return Storage::url($this->attributes['image']);
    }


    public function modules()
    {
        return $this->hasMany(Module::class);
    }

    public function students()
    {
        return $this->belongsToMany(User::class, 'course_users', 'course_id', 'user_id');
    }


    public function hasAccess(User $user)
    {
        return CourseUser::where('user_id', $user->id)->where('course_id', $this->id)->exists();
    }

    public function saved_users()
    {
        return $this->belongsToMany(User::class, 'saved_courses', 'course_id', 'user_id')->withTimestamps();
    }


    public function getTotalVideoLengthAttribute()
    {
        return $this->modules->reduce(function ($total_module_video_length, $module) {
            return $total_module_video_length + $module->videos->reduce(function ($total_lesson_video_length, $lesson) {
                return $total_lesson_video_length + ($lesson->duration ? (int) $lesson->duration : 0);
            }, 0);
        }, 0);
    }





    public function testimonials()
    {
        return $this->hasMany(Testimonial::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function scopeFilterByPopular($query)
    {
        return $query->when(request('popular') == '0' || request('popular') == '1', function ($query) {
            return $query->where('popular', boolval(intval(request('popular'))));
        });
    }

    public function scopeFilterByRecommended($query)
    {
        return $query->when(request('recommended') == '0' || request('recommended') == '1', function ($query) {
            return $query->where('recommended', boolval(intval(request('recommended'))));
        });
    }
}
