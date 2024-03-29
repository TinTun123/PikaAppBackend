<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];


    public function favoritePodcasts()
    {
        return $this->belongsToMany(Podcast::class, 'favorite_podcasts', 'user_id', 'podcast_id')->withTimestamps();
    }

    public function savedCourses()
    {
        return $this->belongsToMany(Course::class, 'saved_courses', 'user_id', 'course_id')
            ->withTimestamps()->orderByPivot('created_at', 'desc')
            ->withCount(['modules', 'lessons'])->with('category');
    }

    public function role()
    {
        return $this->belongsTo(Role::class);
    }
}
