<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Audio extends Model
{
    use HasFactory;

    public function getImageAttribute()
    {
        return Storage::url($this->attributes['image']);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
