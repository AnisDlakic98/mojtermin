<?php

namespace App\Http\Controllers;

use App\Http\Requests\TestimonialRequest;
use App\Testimonial;
use Illuminate\Http\Request;

class TestimonialController extends Controller
{
    public function index(){
        $testimonials = Testimonial::all();
        return response()->json(["success", $testimonials], 200);
    }

    public function update(TestimonialRequest $request, $id)
    {
        $validated = $request->validated();

        if($validated) {
            $testimonial = Testimonial::findOrFail($id);
            $testimonial->update($request->all());
            return ['message' => 'Testimonial updated successfully'];
        }
    }

    public function destroy($id)
    {
        $testimonial = Testimonial::findOrFail($id);
        $testimonial->delete();
        return ['message' => "Testimonial deleted successfully"];
    }

    public function store(TestimonialRequest $request)
    {
        $validated = $request->validated();

        if ($validated) {
            Testimonial::create($request->all());
            return ['message' => 'Testimonial updated successfully'];
        }
    }
}
