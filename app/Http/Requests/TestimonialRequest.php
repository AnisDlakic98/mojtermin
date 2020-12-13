<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TestimonialRequest extends FormRequest
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
            'author' => 'required',
            'text' => 'required',
            'stars' => 'required|integer|between:1,5',
        ];
    }

    public function messages()
    {
        return [
            'author.required' => 'Autor je obavezan!',
            'text.required' => 'Tekst je obavezan!',
            'stars.between' => 'Broj zvjezdica mora biti u okviru 1-5',
            'stars.required' => 'Zvijezdice su obavezne!',
        ];
    }
}
