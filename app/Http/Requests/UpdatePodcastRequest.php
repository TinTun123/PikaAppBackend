<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePodcastRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required',
            'file' => 'required',
            'category_id' => 'required',
            // 'time' => 'required',
            'description' => 'required',
            'author' => 'required',
            'image' => 'required',
            'type' => 'required|in:free,paid',
            'price' => 'required_if:type,paid',
        ];
    }
}
