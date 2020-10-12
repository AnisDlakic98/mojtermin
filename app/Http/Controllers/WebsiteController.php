<?php

namespace App\Http\Controllers;

use App\Category;
use App\City;
use App\Country;
use App\Salon;
use App\User;
use Illuminate\Support\Facades\DB;

class WebsiteController extends Controller
{
    public function welcomePageContent()
    {
        $salons = Salon::with('city', 'statuses')->get();
        return view('welcome', compact('salons'));
    }

    public function registerCustomer()
    {
        return view('auth.register-customer');
    }

    public function registerOwner()
    {
        $categories = Category::all();
        $cities = City::all();
        $countries = Country::all();
        return view('auth.register-owner', compact('categories', 'cities', 'countries'));
    }

    public function getServicesByUserAPI($id)
    {
        $salonId = DB::table('users')->where('id', $id)->value('salon_id');
        $services = DB::select("
            SELECT DISTINCT se.*
            FROM salon_service ss, salons sa, services se
            WHERE ss.service_id = se.id AND ss.salon_id = sa.id AND sa.id = $salonId
        ");
        return response()->json(["success", $services], 200);
    }
}
