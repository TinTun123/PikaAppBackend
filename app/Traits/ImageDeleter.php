<?php


namespace App\Traits;

use Illuminate\Support\Facades\Storage;

trait ImageDeleter
{

  public function checkIfHttp($uri)
  {
    return str_starts_with($uri, 'http');
  }

  public function getPath($uri)
  {
    if ($this->checkIfHttp($uri)) {
      return explode('storage', $uri)[1];
    }
    return $uri;
  }

  public function deleteImage($uri)
  {
    $path = $this->getPath($uri);
    if (Storage::exists($path)) {
      Storage::delete($path);
    }
  }
}
