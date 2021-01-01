<?php

namespace App\Http\Controllers;

use App\Country;
use Illuminate\Http\Request;

class CountryController extends Controller
{
    public function getCities(Country $country)
    {
        return $country->cities()->select('id', 'name')->get();
    }

    public function getCitiesByCountryId(Request $id)
    {
        $country = Country::findOrFail($id);
        $cities = $country->cities()->select('id', 'name')->get();
        return response()->json(['message' => $cities]);
    }



}
