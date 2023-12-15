<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Course extends Model
{
    use HasFactory;


    public function videos()
    {
        return $this->hasMany(Video::class);
    }

    public function getImageAttribute()
    {
        return Storage::url($this->attributes['image']);
    }
}
