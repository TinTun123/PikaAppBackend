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
        $moduleExist = Module::where('course_id', $request->course_id)->where('number', $request->number)->first();
        if ($moduleExist) {
            return back()->withErrors(['number' => 'Module with the same number already exists!']);
        }
        $attributes = $request->only('title', 'description', 'number', 'course_id');
        Module::create($attributes);
        return back();
    }

    public function update(Module $module, UpdateModuleRequest $request)
    {
        if ($module->number !== $request->number) {
            $moduleExist = Module::where('number', $request->number)->where('course_id', $module->course_id)->first();
            if ($moduleExist) {
                return back()->withErrors(['number' => 'Module with the same number already exists!']);
            }
        }
        $attributes = $request->only('title', 'description', 'number');
        $module->update($attributes);
        return back();
    }

    public function destroy(Module $module)
    {
        $module->delete();
        return back();
    }
}
