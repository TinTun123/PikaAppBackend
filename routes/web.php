<?php

use App\Http\Controllers\AdminAudioController;
use App\Http\Controllers\AdminCategoryController;
use App\Http\Controllers\AdminCourseController;
use App\Http\Controllers\AdminLessonController;
use App\Http\Controllers\AdminModuleController;
use App\Http\Controllers\AdminPopularPodcastController;
use App\Http\Controllers\AdminRecommendedPodcastController;
use App\Http\Controllers\AdminSliderController;
use App\Http\Controllers\AdminTestimonialController;
use App\Http\Controllers\AdminUserController;
use App\Http\Controllers\AdminVersionController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return inertia('Home');
})->name('index');

Route::controller(AdminUserController::class)->prefix('user')->name('users.')->group(function () {
    Route::get('/', 'index')->name('index');
});


Route::controller(AdminSliderController::class)->prefix('/sliders')->name('sliders.')->group(function () {
    Route::get('/', 'index')->name('index');
    Route::post('/', 'store')->name('store');
});

Route::controller(AdminCourseController::class)->prefix('/courses')->name('courses.')->group(function () {
    Route::get('/', 'index')->name('index');
    Route::get('/create', 'create')->name('create');
    Route::post('/', 'store')->name('store');
    Route::get('/edit/{course:id}', 'edit')->name('edit');
    Route::post('/update/{course:id}', 'update')->name('update');
});

Route::controller(AdminModuleController::class)->prefix('/module')->name('module.')->group(function () {
    Route::post('/', 'store')->name('store');
    Route::post('/update/{module:id}', 'update')->name('update');
    Route::delete('/destroy/{module:id}', 'destroy')->name('destroy');
});

Route::controller(AdminLessonController::class)->prefix('/lessons')->name('lessons.')->group(function () {
    Route::post('/', 'store')->name('store');
    Route::post('/update/{video:id}', 'update')->name('update');
    Route::delete('/destroy/{video:id}', 'destroy')->name('destroy');
});

Route::controller(AdminTestimonialController::class)->prefix('/testimonial')->name('testimonial.')->group(function () {
    Route::get('/{course:id}', 'index')->name('index');
    Route::post('/store', 'store')->name('store');
    Route::post('/update/{testimonial:id}', 'update')->name('update');

    Route::post('/toggle-publish/{testimonial:id}', 'togglePublish')->name('toggle.publish');
});


Route::controller(AdminCategoryController::class)->prefix('/category')->name('category.')->group(function () {
    Route::get('/', 'index')->name('index');
    Route::post('/store', 'store')->name('store');
    Route::post('/{category:id}', 'update')->name('update');
});

Route::controller(AdminAudioController::class)->prefix('/audio')->name('audio.')->group(function () {
    Route::get('/', 'index')->name('index');
    Route::post('/store', 'store')->name('store');
    Route::post('/{audio:id}', 'update')->name('update');
    Route::delete('/{audio:id}', 'destroy')->name('destroy');
    Route::post('/popular/{audio:id}', 'togglePopular')->name('togglePopular');
    Route::post('/recommended/{audio:id}', 'toggleRecommended')->name('toggleRecommended');
});

Route::controller(AdminPopularPodcastController::class)->prefix('/popular')->name('popular.')->group(function () {
    Route::get('/', 'index')->name('index');
});

Route::controller(AdminRecommendedPodcastController::class)->prefix('/recommended')->name('recommended.')->group(function () {
    Route::get('/', 'index')->name('index');
});

Route::controller(AdminVersionController::class)->prefix('version')->name('version.')->group(function () {
    Route::get('/', 'index')->name('index');
    Route::post('/', 'update')->name('update');
});
