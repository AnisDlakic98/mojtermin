<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'verified', 'role:user']); // ako imamo npr neki profile kontroller isto ovoo stavjamo, dje god nam treba provjera da li je verifikkovan
    }

    public function index(){
        return view('user.index');
    }
}
