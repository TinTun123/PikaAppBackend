<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('lessons', function (Blueprint $table) {
            $table->id();
            $table->text('file');
            $table->enum('type', ['podcast', 'video']);
            $table->text('title');
            $table->longText('description');
            $table->foreignId('course_id');
            $table->foreignId('module_id');
            $table->integer('number');
            $table->string('number_as_text');
            $table->integer('duration');

            $table->unique(['number', 'module_id']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('videos');
    }
};
