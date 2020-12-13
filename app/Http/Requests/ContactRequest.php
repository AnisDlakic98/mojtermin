<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactRequest extends FormRequest
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
            'subject' => 'required',
            'message' => 'required',
            'name' => 'required',
            'email' => 'required|email',
        ];
    }

    public function messages()
    {
        return [
            'subject.required' => 'Naslov je obavezan!',
            'message.required' => 'Poruka je obavezna!',
            'name.required' => 'Ime je obavezno!',
            'email.required' => 'Email je obavezan!',
            'email.email' => 'Email mora biti validan!',
        ];
    }
}
