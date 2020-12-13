<?php

namespace App\Http\Controllers;

use App\Service;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ServiceController extends Controller
{

    public function index()
    {
        //
    }


    public function create()
    {
        //
    }

    public function store(Request $request, $salonId)
    {
        $messages = [
            'name.required' => 'Naziv usluge je obavezan!',
            'price.required' => 'Cijena usluge je obavezna!',
            'duration.required' => 'Trajanje usluge je obavezno!',
            'price.regex' => 'Cijena mora biti broj!',
        ];

        $this->validate($request, [
            'name' => 'required|string|min:2|max:191',
            'price' => 'required|regex:/^\d+(\.\d{1,2})?$/',
            'duration' => 'required',
        ], $messages);

        Service::create([
            'name' => $request['name'],
            'price' => $request['price'],
            'duration' => $request['duration'],
        ]);

        $service = DB::table('services')->latest('id')->first();
        DB::insert('INSERT INTO salon_service (salon_id, service_id) values (?, ?)', [$salonId, $service->id]);

        return ['message' => 'Service created successfully'];
    }


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

    public function update(Request $request, $id)
    {
        $service = Service::findOrFail($id);
        $service->update($request->all());
        return ['message' => 'Service updated successfully'];
    }

    public function destroy($id)
    {
        $user = Service::findOrFail($id);
        $user->delete();
        return ['message' => "Service deleted successfully"];
    }
}
