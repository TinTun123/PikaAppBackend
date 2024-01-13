<?php

namespace App\Http\Controllers;

use App\helpers\ChunkUploader;
use App\Http\Requests\StorePodcastRequest;
use App\Http\Requests\UpdatePodcastRequest;
use App\Models\Category;
use App\Models\Podcast;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Owenoj\LaravelGetId3\GetId3;

class AdminPodcastController extends Controller
{
    public function index()
    {
        $podcasts = Podcast::with('category')->paginate(10);
        return inertia('Podcasts/Index', [
            'podcasts' => $podcasts,
            'categories' => Category::where('type', 'podcast')->select('id', 'name')->get()
        ]);
    }

    public function store(StorePodcastRequest $request)
    {
        $attributes = $request->only('title', 'file', 'category_id', 'type', 'time', 'price', 'description', 'author');
        try {
            $track = GetId3::fromDiskAndPath('public', $request->file);
            $attributes['duration'] = $track->getPlaytimeSeconds();
        } catch (Exception $e) {
            return back()->withErrors(['file' => $e->getMessage()]);
        }

        $attributes['image'] = $request->file('image')->store('podcasts');
        Podcast::create($attributes);
        return back();
    }

    public function update(UpdatePodcastRequest $request, Podcast $podcast)
    {
        $attributes = $request->only('title', 'file', 'type', 'category_id', 'time', 'price', 'description', 'author');
        if ($request->type === 'free') {
            $attributes['price'] = null;
        }

        try {
            $track = GetId3::fromDiskAndPath('public', $request->file);
            $attributes['duration'] = $track->getPlaytimeSeconds();
        } catch (Exception $e) {
            return back()->withErrors(['file' => $e->getMessage()]);
        }

        $podcast->update($attributes);
        return back();
    }


    public function destroy(Podcast $podcast)
    {
        $podcast->delete();
        return back();
    }

    public function togglePopular(Podcast $podcast)
    {
        $podcast->update(['popular' => !$podcast->popular]);
        return back();
    }

    public function toggleRecommended(Podcast $podcast)
    {
        $podcast->update(['recommended' => !$podcast->recommended]);
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
        if (Storage::exists($path)) {
            Storage::delete($path);
        }
        return response()->json([
            'success' => true
        ]);
    }
}
