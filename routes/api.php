<?php

use App\Http\Controllers\AdminAudioController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\FavoritePodcastController;
use App\Http\Controllers\PopularPodcastController;
use App\Http\Controllers\RecommendedPodcastController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\SliderController;
use App\Http\Controllers\UserAuthController;
use App\Http\Controllers\VersionController;
use App\Http\Controllers\VideoController;
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
    Route::get('/courses/{course:id}', [CourseController::class, 'show']);

    Route::get('/lessons/{video:id}', [VideoController::class, 'show']);

    Route::get('categories', [CategoryController::class, 'index']);

    Route::get('/version', [SettingController::class, 'getVersion']);
    Route::get('/terms', [SettingController::class, 'getTerms']);

    Route::get('popular', [PopularPodcastController::class, 'index']);

    Route::get('recommended', [RecommendedPodcastController::class, 'index']);

    Route::controller(FavoritePodcastController::class)->prefix('favorite')->group(function () {
        Route::get('/', 'index');
        Route::post('/{audio:id}', 'toggleFavorite');
    });

});

Route::post('/audio/upload', [AdminAudioController::class, 'uploadPodcast']);
Route::post('/audio/remove', [AdminAudioController::class, 'removePodcast']);
