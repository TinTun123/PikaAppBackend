<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreLessonRequest;
use App\Http\Requests\StoreModuleRequest;
use App\Http\Requests\UpdateLessonRequest;
use App\Http\Requests\UpdateModuleRequest;
use App\Models\Module;
use App\Models\Video;
use Illuminate\Http\Request;

class AdminModuleController extends Controller
{
    public function store(StoreModuleRequest $request)
    {
        $attributes = $request->only('title', 'description', 'number', 'course_id');
        Module::create($attributes);
        return back();
    }

    public function update(Module $module, UpdateModuleRequest $request)
    {
        $attributes = $request->only('title', 'description', 'number', 'video', 'course_id');
        $module->update($attributes);
        return back();
    }

    public function destroy(Module $module)
    {
        $module->delete();
        return back();
    }
}
