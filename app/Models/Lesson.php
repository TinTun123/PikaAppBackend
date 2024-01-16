<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Lesson extends Model
{
    use HasFactory;


    protected $appends = ['playable_file'];


    public function watched_users()
    {
        return $this->belongsToMany(User::class,'watched_lessons','video_id','user_id');
    }


    public function getPlayableFileAttribute()
    {
        if($this->type === 'podcast'){
            if (isset($this->attributes['file'])) {
                return Storage::url($this->attributes['file']);
            } else {
                return null;
            }
        }

    }



}
