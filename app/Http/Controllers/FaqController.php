<?php

namespace App\Http\Controllers;

use App\Faq;
use App\Http\Requests\FaqRequest;

class FaqController extends Controller
{
    public function index()
    {
        $faqs = Faq::all();
        return response()->json(["success", $faqs], 200);
    }

    public function update(FaqRequest $request, $id)
    {
        $validated = $request->validated();

        if ($validated) {
            $faq = Faq::findOrFail($id);
            $faq->update($request->all());
            return ['message' => 'Faq updated successfully'];
        }
    }

    public function store(FaqRequest $request)
    {
        $validated = $request->validated();

        if ($validated) {
            Faq::create($request->all());
            return ['message' => 'Faq updated successfully'];
        }
    }

    public function destroy($id)
    {
        $faq = Faq::findOrFail($id);
        $faq->delete();
        return ['message' => "Faq deleted successfully"];
    }
}
