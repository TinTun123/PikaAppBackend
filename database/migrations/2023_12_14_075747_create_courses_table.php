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
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->longText('info');
            $table->longText('outline');
            $table->text('image');
            $table->string('author');
            $table->integer('fee');
            $table->foreignId('category_id');
            $table->boolean('popular')->default(false);
            $table->boolean('recommended')->default(false);
            $table->longText('recommendation_text');
            $table->text('attraction_text');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};
