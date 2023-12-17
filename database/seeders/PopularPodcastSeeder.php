<?php

namespace Database\Seeders;

use App\Models\PopularPodcast;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PopularPodcastSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PopularPodcast::create(['podcast_ids' => []]);
    }
}
