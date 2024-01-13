<?php

use App\Http\Controllers\AdminAuthController;
use App\Http\Controllers\AdminCategoryController;
use App\Http\Controllers\AdminCourseController;
use App\Http\Controllers\AdminLessonController;
use App\Http\Controllers\AdminModuleController;
use App\Http\Controllers\AdminPodcastController;
use App\Http\Controllers\AdminPopularPodcastController;
use App\Http\Controllers\AdminRecommendedPodcastController;
use App\Http\Controllers\AdminSettingController;
use App\Http\Controllers\AdminSliderController;
use App\Http\Controllers\AdminTestimonialController;
use App\Http\Controllers\AdminUserController;
use App\Models\Course;
use App\Models\Podcast;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Owenoj\LaravelGetId3\GetId3;
use Vimeo\Vimeo;

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

Route::middleware('guest')->group(function () {
    Route::get('/login', [AdminAuthController::class, 'showLogin'])->name('login');
    Route::post('/login', [AdminAuthController::class, 'login'])->name('postLogin');
});


Route::middleware('auth')->group(function () {
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

        Route::post('/popular/{course:id}', 'togglePopular')->name('togglePopular');
        Route::post('/recommended/{course:id}', 'toggleRecommended')->name('toggleRecommended');
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
        Route::delete('/destroy/{testimonial:id},', 'destroy')->name('destroy');
        Route::post('/toggle-publish/{testimonial:id}', 'togglePublish')->name('toggle.publish');
    });


    Route::controller(AdminCategoryController::class)->prefix('/category')->name('category.')->group(function () {
        Route::get('/podcast', 'getPodcastCategory')->name('podcast.index');
        Route::get('/course', 'getCourseCategory')->name('course.index');

        Route::post('/store', 'store')->name('store');
        Route::post('/{category:id}', 'update')->name('update');
    });

    Route::controller(AdminPodcastController::class)->prefix('/podcast')->name('podcast.')->group(function () {
        Route::get('/', 'index')->name('index');
        Route::post('/store', 'store')->name('store');
        Route::post('/{podcast:id}', 'update')->name('update');
        Route::delete('/{podcast:id}', 'destroy')->name('destroy');
        Route::post('/popular/{podcast:id}', 'togglePopular')->name('togglePopular');
        Route::post('/recommended/{podcast:id}', 'toggleRecommended')->name('toggleRecommended');
    });


    Route::controller(AdminSettingController::class)->prefix('settings')->name('setting.')->group(function () {
        Route::get('/version', 'getVersion')->name('version');
        Route::get('/terms', 'getTerm')->name('term');

        Route::post('/version/update', 'updateVersion')->name('version.update');
        Route::post('/terms/update', 'updateTerms')->name('terms.update');
    });
});
