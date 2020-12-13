<?php

namespace App\Http\Controllers;

use App\About;
use App\Http\Requests\AboutRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AboutController extends Controller
{
    public function index(){
        $about = About::all();
        return response()->json(["success", $about], 200);
    }

    public function update(AboutRequest $request, $id)
    {
        $validated = $request->validated();

        if($validated) {
            $about = About::findOrFail($id);
            $about->update($request->all());
            return ['message' => 'About updated successfully'];
        }
    }
}
