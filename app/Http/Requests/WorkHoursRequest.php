<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class WorkHoursRequest extends FormRequest
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
            'workdaysOpen' => 'nullable',
            'workdaysClose' => 'nullable',
            'saturdayOpen' => 'nullable',
            'saturdayClose' => 'nullable',
            'sundayOpen' => 'nullable',
            'sundayClose' => 'nullable',
        ];

    }

    public function messages()
    {
        return [
//            'workdaysOpen.required' => 'Polje je obavezno!',
//            'workdaysClose.required' => 'Polje je obavezno!',
//            'saturdayOpen.required' => 'Polje je obavezno!',
//            'saturdayClose.required' => 'Polje je obavezno!',
//            'sundayOpen.required' => 'Polje je obavezno!',
//            'sundayClose.required' => 'Polje je obavezno!',
        ];
    }
}
