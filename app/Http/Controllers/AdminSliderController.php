<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSliderRequest;
use App\Models\Slider;
use Illuminate\Http\Request;

class AdminSliderController extends Controller
{
    public function index()
    {
        $sliders = Slider::paginate(10);
        return inertia('Slider/Index',[
            'sliders' => $sliders
        ]);
    }

    public function store(StoreSliderRequest $request)
    {
        $attributes = $request->only('link');
        $attributes['image'] = $request->file('image')->store('sliders');
        Slider::create($attributes);
        return back();
    }
}
