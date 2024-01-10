<?php

namespace App\Models;

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

