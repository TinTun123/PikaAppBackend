<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use HasFactory;

    public function watched_users()
    {
        return $this->belongsToMany(User::class,'watched_lessons','video_id','user_id');
    }



}
