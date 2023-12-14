<?php

use App\Http\Controllers\AdminCourseController;
use App\Http\Controllers\AdminLessonController;
use App\Http\Controllers\AdminSliderController;
use Illuminate\Support\Facades\Route;

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

Route::controller(AdminSliderController::class)->prefix('/sliders')->name('sliders.')->group(function () {
    Route::get('/', 'index')->name('index');
    Route::post('/', 'store')->name('store');
});

Route::controller(AdminCourseController::class)->prefix('/courses')->name('courses.')->group(function(){
    Route::get('/','index')->name('index');
    Route::get('/create','create')->name('create');
    Route::post('/','store')->name('store');
    Route::get('/edit/{course:id}','edit')->name('edit');
    Route::post('/update/{course:id}','update')->name('update');
});

Route::controller(AdminLessonController::class)->prefix('/lessons')->name('lessons.')->group(function(){
    Route::post('/','store')->name('store');
    Route::post('/update/{video:id}','update')->name('update');
});
