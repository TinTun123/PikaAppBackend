<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Setting::create([
            'version' => '1.0',
            'terms' => '',
            'job' => 'Founder & CEO at PikaSharing',
            'bio' => 'A gambler',
            'profile' => fake()->imageUrl(500, 500),
        ]);
    }
}
