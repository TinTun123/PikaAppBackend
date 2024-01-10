<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Models\Category;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function getCourseCategory()
    {
        return response()->json([
            'categories' => Category::where('type', 'course')->select('id', 'name')->take(10)->get(),
        ]);
    }

    public function getPodcastCategory()
    {
        return response()->json([
            'categories' => Category::where('type', 'podcast')->select('id', 'name')->take(10)->get(),
        ]);
    }
}
