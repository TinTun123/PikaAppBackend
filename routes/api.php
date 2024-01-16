<?php

use App\Http\Controllers\AdminPodcastController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\FavoritePodcastController;
use App\Http\Controllers\PodcastController;
use App\Http\Controllers\PopularPodcastController;
use App\Http\Controllers\RecommendedPodcastController;
use App\Http\Controllers\SavedCourseController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\SliderController;
use App\Http\Controllers\UserAuthController;
use App\Http\Controllers\LessonController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::post('/register', [UserAuthController::class, 'register']);
Route::post('/login', [UserAuthController::class, 'login']);
Route::post('/forget-password', [UserAuthController::class, 'forgetPassword']);
Route::post('/reset-password', [UserAuthController::class, 'resetPassword']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [UserAuthController::class, 'logout']);
    Route::get('/user', [UserAuthController::class, 'getUser']);


    Route::get('/sliders', [SliderController::class, 'index']);


    Route::get('/courses', [CourseController::class, 'index']);
    Route::get('/courses/search', [CourseController::class, 'searchCourse']);
    Route::get('/courses/{course:id}', [CourseController::class, 'show']);

    Route::post('/courses/buy/{course:id}', [CourseController::class, 'buy']);


    Route::get('/lessons/{video:id}', [LessonController::class, 'show']);
    Route::post('/lessons/watched/{video:id}', [LessonController::class, 'toggleLessonWatched']);

    Route::get('categories/course', [CategoryController::class, 'getCourseCategory']);
    Route::get('categories/podcast', [CategoryController::class, 'getPodcastCategory']);

    Route::get('/version', [SettingController::class, 'getVersion']);
    Route::get('/terms', [SettingController::class, 'getTerms']);

    Route::get('/podcasts', [PodcastController::class, 'index']);
    Route::get('/podcasts/popular', [PopularPodcastController::class, 'index']);
    Route::get('/podcasts/recommended', [RecommendedPodcastController::class, 'index']);


    Route::controller(FavoritePodcastController::class)->prefix('favorite')->group(function () {
        Route::get('/', 'index');
        Route::post('/{podcast:id}', 'toggleFavorite');
    });

    Route::controller(SavedCourseController::class)->prefix('saved')->group(function () {
        Route::get('/', 'index');
        Route::post('/{course:id}', 'toggleSaved');
    });
});


