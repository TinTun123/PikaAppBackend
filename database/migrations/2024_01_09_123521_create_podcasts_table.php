<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('podcasts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('image');
            $table->string('file');
            $table->string('category_id');
            $table->string('time');
            $table->string('price')->nullable();
            $table->string('description');
            $table->string('author');
            $table->boolean('popular')->default(false);
            $table->boolean('recommended')->default(false);
            $table->enum('type',['paid','free']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('podcasts');
    }
};