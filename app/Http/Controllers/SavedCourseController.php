<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\SavedCourse;
use Illuminate\Support\Facades\DB;

class SavedCourseController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $courses = $user->savedCourses()->paginate(10);
        return response()->json([
            'courses' => $courses
        ]);
    }

    public function toggleSaved($id)
    {
        $isSaved = SavedCourse::where('course_id', $id)->where('user_id', auth()->id())->first();

        if ($isSaved) {
            $isSaved->delete();
            return response()->json([
                'message' => 'You unsaved this course'
            ]);
        } else {
            SavedCourse::create(['user_id' => auth()->id(), 'course_id' => $id]);
            return response()->json([
                'message' => 'You saved this course'
            ]);
        }
    }
}
