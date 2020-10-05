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
}
