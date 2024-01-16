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
            $table->text('title');
            $table->text('image');
            $table->text('file');
            $table->string('category_id');
            $table->integer('duration');
            $table->integer('price')->nullable();
            $table->longText('description');
            $table->longText('author');
            $table->boolean('popular')->default(false);
            $table->boolean('recommended')->default(false);
            $table->enum('type', ['paid', 'free']);
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
