<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAudioRequest;
use App\Models\Audio;
use Illuminate\Http\Request;

class AdminAudioController extends Controller
{
    public function index()
    {
        $audios = Audio::paginate(10);
        return inertia('Audio/Index',[
            'audios' => $audios, 
        ]);
    }

    public function store(StoreAudioRequest $request)
    {
        $attributes = $request->only('title','file','category_id','time','price','description','author');
        $attributes['image'] = $request->file('image')->store('audio');
    }

    public function updae()
    {

    }

}
