<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Salon;
use App\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/user';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param array $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {

        if ($data['registerType'] === 'customer') {
            return Validator::make($data, [
                'name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
                'password' => ['required', 'string', 'min:8', 'confirmed'],
            ]);
        }

        if ($data['registerType'] === 'owner') {
            $urlRegex = '/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/';
            return Validator::make($data, [
                'name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
                'password' => ['required', 'string', 'min:8', 'confirmed'],
                'salon_name' => ['required'],
                'salon_address' => ['required'],
                'phone_number' => ['required'],
                'website' => 'nullable|regex:' . $urlRegex,
            ]);
        }
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param array $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        // ***************** CUSTOMER REGISTER *****************
        if ($data['registerType'] === 'customer') {
            $this->redirectTo = '/user';
            $user = User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => Hash::make($data['password']),
            ]);
            $user->attachRole('user');
            return $user;
        }

        // ***************** SALON OWNER REGISTER *****************
        if ($data['registerType'] === 'owner') {
            $this->redirectTo = '/admin';
            $user = User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => Hash::make($data['password']),
            ]);

            $user->attachRole('administrator');

            Salon::create([
                'name' => $data['salon_name'],
                'address' => $data['salon_address'],
                'phone_number' => $data['phone_number'],
                'city_id' => $data['city'],
                'category_id' => $data['category'],
                'website' => $data['website'],
            ]);
            return $user;
        }


    }
}
