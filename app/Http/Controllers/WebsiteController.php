<?php

namespace App\Http\Controllers;

use App\About;
use App\Category;
use App\City;
use App\Country;
use App\Faq;
use App\Salon;
use App\Testimonial;
use http\Env\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class WebsiteController extends Controller
{
    public function welcomePageContent()
    {
        $salons = Salon::with('city', 'statuses', 'images')->where('status', 1)->get()->take(8);
        $testimonials = Testimonial::all();
        $about = About::first();
        return view('welcome', compact('salons', 'testimonials', 'about'));
    }

    public function paginateSalons(\Illuminate\Http\Request $request){
        if($request->search == "" || empty($request->search)) {
            $salons = Salon::with('city', 'statuses', 'images')
                ->where('status', 1)
                ->where('category_id', $request->category_id)
                ->paginate(4);
        } else {
            $salons = Salon::with('city', 'statuses', 'images')
                ->where('status', 1)
                ->where('name', 'like', '%' . $request->search . '%')
                ->where('category_id', $request->category_id)
                ->paginate(4);
        }
        return response()->json([$salons], 200);
    }


    public function search()
    {
        return view('search');
    }

    public function about()
    {
        $about = About::first();
        return view('about', compact( 'about'));
    }

    public function faqs()
    {
        $faqs = Faq::all();
        return view('faqs', compact( 'faqs'));
    }

    public function contact()
    {
        return view('contact');
    }

    public function registerCustomer()
    {
        return view('auth.register-customer');

    }

    public function panel()
    {
        if(!Auth::guest()) {
            if(Auth::user()->hasRole('administrator')){
                return view('admin.index');
            } else if(Auth::user()->hasRole('superadministrator')){
                return view('superadmin.index');
            } else {
                return view('user.index');
            }
        } else {
            return view('errors.404');
        }
    }

    public function notFound()
    {
        return view('errors.404');
    }

    public function getCategories(){
        $categories = Category::all();
        return response()->json(["success", $categories], 200);
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
