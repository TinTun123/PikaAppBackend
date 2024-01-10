<?php

namespace App\Observers;

use App\Models\Podcast;
use Illuminate\Support\Facades\Storage;

class PodcastObserver
{

    public function deleted(Podcast $podcast): void
    {
        Storage::delete(explode('storage', $podcast->image)[1]);
    }

}
