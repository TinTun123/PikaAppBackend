<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Audio extends Model
{
    use HasFactory;

    protected $appends = ['playable_file'];

    public function getImageAttribute()
    {
        return Storage::url($this->attributes['image']);
    }

    public function getPlayableFileAttribute()
    {
        return Storage::url($this->attributes['file']);
    }



    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
