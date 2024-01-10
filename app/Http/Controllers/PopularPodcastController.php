<?php

namespace App\Http\Controllers;

use App\Models\Podcast;

class PopularPodcastController extends Controller
{
    public function index()
    {
        $podcasts = Podcast::with(['category' => function($query){
            return $query->select('name','id');
        }])->select('title','image','type','category_id','time','popular','price')
            ->where('popular',true);

        if(request('limit')){
            $podcasts = $podcasts->take(intval(request('limit')))->get();
        }else{
            $podcasts = $podcasts->paginate(10);
        }

        return response()->json([
            'podcasts' => $podcasts
        ]);
    }
}
