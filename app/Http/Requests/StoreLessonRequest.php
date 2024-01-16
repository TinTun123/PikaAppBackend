<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreLessonRequest extends FormRequest
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
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required',
            'type' => 'required|in:video,podcast',
            'file' => 'required',
            'number' => 'required',
            'number_as_text' => 'required',
            'description' => 'required',
            'course_id' => 'required|exists:courses,id',
            'module_id' => 'required|exists:modules,id',
        ];
    }
}
