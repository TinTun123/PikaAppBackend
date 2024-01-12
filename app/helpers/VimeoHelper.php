<?php


namespace App\helpers;

use Vimeo\Vimeo;

class VimeoHelper
{
  public function getVideoDuration($id)
  {
    $client = new Vimeo(env('VIMEO_ID'), env('VIMEO_SECRET'), env('VIMEO_TOKEN'));

    $response = $client->request("/videos/$id", array(), 'GET');

    if ($response['status'] !== 200) {
      return ['status' => $response['status'], 'error' => $response['body']['error']];
    } else {
      return ['status' => $response['status'], 'duration' => $response['body']['duration']];
    }
  }
}
