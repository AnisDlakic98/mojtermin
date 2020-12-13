<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CommentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'comment' => 'required|string|min:2|max:191',
            'name' => 'required|string|min:2|max:191',
            'email' => 'required|string|email|max:191',
        ];
    }

    public function messages()
    {
        return [
            'comment.required' => 'Komentar je obavezan!',
            'name' => 'Ime je obavezno!',
            'email' => 'Email je obavezan!',
        ];
    }
}
