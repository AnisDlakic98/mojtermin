<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{

    public function __construct()
    {
        $this->middleware(['auth', 'verified', 'role:administrator']); // ako imamo npr neki profile kontroller isto ovoo stavjamo, dje god nam treba provjera da li je verifikkovan
    }

    public function index()
    {
        return view('admin.index');
    }
}
