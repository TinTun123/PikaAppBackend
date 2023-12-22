<?php

namespace App\Http\Controllers;

use App\helpers\ChunkUploader;
use App\Http\Requests\StoreAudioRequest;
use App\Http\Requests\UpdateAudioRequest;
use App\Models\Audio;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AdminAudioController extends Controller
{
    public function index()
    {
        $audios = Audio::with('category')->paginate(10);
        return inertia('Audio/Index',[
            'audios' => $audios, 
            'categories' => Category::select('id','name')->get()
        ]);
    }

    public function store(StoreAudioRequest $request)
    {
        $attributes = $request->only('title','file','category_id','time','price','description','author');
        $attributes['time'] = 10000;
        $attributes['image'] = $request->file('image')->store('audio');
        Audio::create($attributes);
        return back();
    }

    public function update(UpdateAudioRequest $request,Audio $audio)
    {
        $attributes = $request->only('title', 'file', 'category_id', 'time', 'price', 'description', 'author');
        $attributes['time'] = 10000;
        $audio->update($attributes);
        return back();
    }


    public function destroy(Audio $audio)
    {
        $audio->delete();
        return back();
    }

    public function togglePopular(Audio $audio)
    {
        $audio->update(['popular' => !$audio->popular]);
        return back();
    }

    public function toggleRecommended(Audio $audio)
    {
        $audio->update(['recommended' => !$audio->recommended]);
        return back();
    }

    public function uploadPodcast(Request $request, ChunkUploader $chunkUploader)
    {
        $fileName = preg_replace('/[^A-Za-z0-9 ]/', '', $request->filename);
        $chunkUpload = $chunkUploader->uploadChunk($request, $request->path, $fileName);

        return $chunkUpload;
    }

    public function removePodcast(Request $request)
    {
        $path = $request->path;
        if(Storage::exists($path)){
            Storage::delete($path);
        }
        return response()->json([
            'success' => true
        ]);
    }


}
