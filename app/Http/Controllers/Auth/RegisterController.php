<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Salon;
use App\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
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

        $messages = [
            'name.required' => 'Morate unijeti ime!',
            'email.required' => 'Morate unijeti email!',
            'password.required' => 'Morate unijeti lozinku!',
            'email.email' => 'Unešeni email nije validan!',
            'email.unique' => 'Korisnik sa tim email-om već postoji!',
            'password.confirmed' => 'Lozinke se ne poklapaju!',

            'salon_name.required' => 'Naziv salona je obavezan!',
            'salon_address.required' => 'Adresa salona je obavezna!',
            'phone_number.required' => 'Broj telefona je obavezan!',
            'website.regex' => 'Link mora biti validan!',
        ];

        if ($data['registerType'] === 'customer') {
            return Validator::make($data, [
                'name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
                'password' => ['required', 'string', 'min:8', 'confirmed'],
            ], $messages);
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
            ], $messages);
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
            $user = User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => Hash::make($data['password']),
                'email_verified_at' => '2020-12-08 19:25:45',
            ]);

            $this->redirectTo = '/login';
            $user->attachRole('user');

            return $user;
        }

        // ***************** SALON OWNER REGISTER *****************
        if ($data['registerType'] === 'owner') {


            $salon = Salon::create([
                'name' => $data['salon_name'],
                'address' => $data['salon_address'],
                'phone_number' => $data['phone_number'],
                'city_id' => $data['city'],
                'category_id' => $data['category'],
                'website' => $data['website'],
            ]);

            $user = User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => Hash::make($data['password']),
                'salon_id' => $salon->id,
                'email_verified_at' => '2020-12-08 19:25:45',
            ]);

            $this->redirectTo = '/login';
            $user->attachRole('administrator');
            return $user;
        }


    }
}
