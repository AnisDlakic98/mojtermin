<?php

namespace App\Http\Controllers;

use App\Salon;
use Illuminate\Http\Request;

class SalonController extends Controller
{
    public function index()
    {
        //
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        $similar = Salon::with('city', 'statuses')->get();
        $salon = Salon::with('services')->where('id', $id)->first();
        return view('salon-details', compact('salon', 'similar'));
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
