<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SuperadminController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'verified', 'role:superadministrator']);
    }

    public function index()
    {
        return view('superadmin.index');
    }
}
