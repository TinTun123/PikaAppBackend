<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Models\Category;
use Illuminate\Http\Request;

class AdminCategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        return inertia('Category/Index',[
            'categories' => $categories,
        ]);
    }

    public function store(StoreCategoryRequest $request)
    {
        $attributes = $request->only('name');
        Category::create($attributes);
        return back();
    }

    public function update(UpdateCategoryRequest $request, Category $category)
    {
        $category->update($request->only('name'));
        return back();
    }
}
