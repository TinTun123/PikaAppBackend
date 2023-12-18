<?php

namespace App\Observers;

use App\Models\Audio;
use Illuminate\Support\Facades\Storage;

class AudioObserver
{
    public function deleted(Audio $audio): void
    {
        Storage::delete(explode('storage', $audio->image)[1]);
    }

}
