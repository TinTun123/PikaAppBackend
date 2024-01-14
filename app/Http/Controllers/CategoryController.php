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
        $categories = Category::where('type', 'course')->select('id', 'name');

        if (request('limit')) {
            $categories = $categories->take(request('limit'))->get();
        } else {
            $categories = $categories->get();
        }
        return response()->json([
            'categories' => $categories,
        ]);
    }

    public function getPodcastCategory()
    {
        $categories = Category::where('type', 'podcast')->select('id', 'name');
        if (request('limit')) {
            $categories = $categories->take(request('limit'))->get();
        } else {
            $categories = $categories->get();
        }
        return response()->json([
            'categories' => $categories,
        ]);
    }
}
