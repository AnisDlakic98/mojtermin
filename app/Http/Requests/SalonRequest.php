<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SalonRequest extends FormRequest
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
        $urlRegex = '/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/';
        $phoneRegex = '/^[0-9\-\(\)\/\+\s]*$/';

        return [
            'name' => ['required'],
            'address' => ['required'],
            'phone_number' => ['required', 'regex:' . $phoneRegex],
            'website' => 'nullable|regex:' . $urlRegex,
            'stars' => 'required|integer|between:1,5',
            'latitude' => ['required', 'regex: /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/'],
            'longitude' => ['required', 'regex: /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/'],
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Unesite naziv salona!',
            'address.required' => 'Unesite adresu salona!',
            'phone_number.required' => 'Unesite broj telefona!',
            'phone_number.regex' => 'Format telefona nije validan!',
            'website.regex' => 'Format websajta nije validan!',
            'latitude.required' => 'Unesite geografsku širinu!',
            'longitude.required' => 'Unesite geografsku dužinu!',
            'stars.required' => 'Unesite broj zvjezdica!',
            'stars.numeric' => 'Ovo polje mora biti broj!',
            'stars.between' => 'Broj zvjezdica mora biti u okviru 1-5',
            'latitude.regex' => 'Format geografske širine nije validan!',
            'longitude.regex' => 'Format geografske dužine nije validan!',

        ];
    }
}
