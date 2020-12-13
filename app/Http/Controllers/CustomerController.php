<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'verified', 'role:user']);
    }

    public function index(){
        return view('user.index');
    }
}
