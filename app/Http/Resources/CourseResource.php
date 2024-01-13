<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CourseResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'image' => $this->image,
            'instructor' => $this->instructor,
            'price' => $this->price,
            'category_id' => $this->category_id,
            'popular' => $this->popular,
            'recommended' => $this->recommended,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'saved' => boolval($this->saved),
            'totalVideoLength' => $this->when(isset($this->totalVideoLength), $this->totalVideoLength),
            'modules' => $this->whenLoaded('modules',$this->modules),
            // 'modules' => ModuleResource::collection($this->whenLoaded($this->modules)),

            // 'testimonials' => TestimonialResource::collection($this->whenLoaded($this->testimonials)),
        ];
    }
}
