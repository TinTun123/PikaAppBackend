<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Testimonial extends Model
{
    use HasFactory;

    protected $casts = [
        'published' => 'boolean',
    ];

    public function getFileAttribute()
    {
        if ($this->attributes['type'] === 'photo') {
            return Storage::url($this->attributes['file']);
        }
        return $this->attributes['file'];
    }
}
