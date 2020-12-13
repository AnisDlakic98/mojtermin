<?php

namespace App\Http\Controllers;

use App\Http\Requests\SalonRequest;
use App\Http\Requests\WorkHoursRequest;
use App\Image;
use App\Salon;
use App\Service;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SalonController extends Controller
{
    public function index()
    {
        //
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        $similar = Salon::with('city', 'statuses')->where('id', '!=', $id)->where('status', 1)->get()->take(4);
        $salon = Salon::with('services')->findOrFail( $id);

        return view('salon-details', compact('salon', 'similar'));
    }

    public function edit($id)
    {
        return response()->json(['message' => "aa"]);

    }

    public function workHours(WorkHoursRequest $request, $id) {

//        17:15:48.000000

        $validated = $request->validated();

        if($validated) {
            $salon = Salon::findOrFail($id);
            $salon->update($request->all());
            return response()->json(['message' => $id]);
        }


    }

    public function update(Request $request, $id)
    {
        if(!empty($request->images)){
            $uploadedFiles = $request->images;

            foreach ($uploadedFiles as $file){
                $name = $file->getClientOriginalName();
                \Image::make($file)->save(public_path('img/profile/salon/') . $name);
                // add to db
                Image::create([
                    'image_path' => $name,
                ]);

                $image = DB::table('images')->latest('id')->first();
                DB::insert('INSERT INTO salon_images (salon_id, image_id) values (?, ?)', [$id, $image->id]);

            }
        }

        $messages = [
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
            'images.required' => 'Morate dodati barem jednu sliku!',

        ];

        $urlRegex = '/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/';
        $phoneRegex = '/^[0-9\-\(\)\/\+\s]*$/';

        $this->validate($request, [
            'name' => ['required'],
            'address' => ['required'],
            'phone_number' => ['required', 'regex:' . $phoneRegex],
            'website' => 'nullable|regex:' . $urlRegex,
            'stars' => 'required|integer|between:1,5',
            'latitude' => ['required', 'regex: /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/'],
            'longitude' => ['required', 'regex: /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/'],
            'images' => ['required'],
        ], $messages);

        $salon = Salon::findOrFail($request->id);
        $salon->status = 1;
        $salon->update($request->except('images'));

        return response(['status'=> 'success'],200);
    }

    public function destroy($id)
    {
        //
    }
}
