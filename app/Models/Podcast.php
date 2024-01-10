<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Podcast extends Model
{
    use HasFactory;

    protected $appends = ['playable_file'];

    protected $casts = [
        'popular' => 'boolean',
        'recommended' => 'boolean'
    ];

    public function getImageAttribute()
    {
        return Storage::url($this->attributes['image']);
    }

    public function getPlayableFileAttribute()
    {
        if (isset($this->attributes['file'])) {
            return Storage::url($this->attributes['file']);
        } else {
            return null;
        }
    }


    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
