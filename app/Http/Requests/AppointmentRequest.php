<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AppointmentRequest extends FormRequest
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
            'service_id' => ['required'],
            'date' => ['required'],
            'time' => ['required'],
            'contact_phone' => 'required, regex: ^\+([0-9]+ )+[0-9]+$',
        ];
    }

    public function messages()
    {
        return [
            'service_id.required' => 'Morate odabrati uslugu!',
            'date.required' => 'Morate odabrati datum termina!',
            'time.required' => 'Morate odabrati vrijeme termina!',
            'contact_phone.required' => 'Kontakt telefon je obavezan!',
            'contact_phone.regex' => 'Kontakt telefon mora pocinjati sa pozivnim brojem +382 i broj mora biti validan!',
        ];
    }
}
