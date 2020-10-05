<?php

namespace App\Http\Controllers;

use App\Category;
use App\City;
use App\Country;
use Illuminate\Http\Request;

class WebsiteController extends Controller
{
    public function registerCustomer() {
        return view('auth.register-customer');
    }

    public function registerOwner() {
        $categories = Category::all();
        $cities = City::all();
        $countries = Country::all();
        return view('auth.register-owner', compact('categories', 'cities', 'countries'));
    }
}
