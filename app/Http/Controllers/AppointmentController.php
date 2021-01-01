<?php

namespace App\Http\Controllers;

use App\Appointment;
use App\Http\Requests\AppointmentRequest;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $appointments = Appointment::all();
        return response()->json(["success", $appointments], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }


    public function checkAvaiableTimeByDate($date)
    {
        $disabledHours = Appointment::where('date', $date)->get();
        return response()->json(["success", $disabledHours], 200);
    }

    public function store(Request $request)
    {

        $messages = [
            'date.required' => 'Morate odabrati datum termina!',
            'time.unique' => 'Termin je zauzet! Molimo Vas da odaberete neki drugi!',
            'time.required' => 'Morate odabrati vrijeme termina!',
            'contact_phone.required' => 'Kontakt telefon je obavezan!',
            'contact_phone.regex' => 'Telefon mora biti u sljedećem formatu +382 68 XXX-XXX',
        ];

        $this->validate($request, [
            'date' => ['required'],
            'contact_phone' => ['required', 'regex: /^\+(382) ([0-9]{2}) ([0-9]{3})[-]([0-9]{3})+$/'],
            'time' => ['required', Rule::unique('appointments')->where(function ($query) use ($request) {
                return $query->where('salon_id', $request->salon_id);
            })],
        ], $messages);

        Appointment::create([
            'salon_id' => $request['salon_id'],
            'user_id' => $request['user_id'],
            'contact_phone' => $request['contact_phone'],
            'service_name' => $request['service_name'],
            'salon_name' => $request['salon_name'],
            'message' => $request['message'],
            'date' => $request['date'],
            'time' => $request['time'],
        ]);
        return response()->json(['message' => 'sve je ok']);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
