<?php

namespace App\helpers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Pion\Laravel\ChunkUpload\Receiver\FileReceiver;
use Pion\Laravel\ChunkUpload\Handler\HandlerFactory;

class ChunkUploader
{
  public function __construct()
  {
    # code ...
  }

  public function uploadChunk(Request $request, $path, $fileName)
  {
    $receiver = new FileReceiver('file', $request, HandlerFactory::classFromRequest($request));

    if (!$receiver->isUploaded()) {
      // file not uploaded
    }

    $fileReceived = $receiver->receive(); // receive file
    if ($fileReceived->isFinished()) { // file uploading is complete / all chunks are uploaded

      $file = $fileReceived->getFile(); // get file

      $extension = $file->getClientOriginalExtension();

      $upload = $file->store('podcasts');

      // delete chunked file
      unlink($file->getPathname());

      return [
        'path' => $upload,
        'playable' => Storage::url($upload),
        'filename' => $fileName
      ];
    }

    // otherwise return percentage information
    $handler = $fileReceived->handler();
    return [
      'done' => $handler->getPercentageDone(),
      'status' => true
    ];
  }
}
