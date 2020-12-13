<?php

namespace App\Http\Controllers;

use App\Contact;
use App\Http\Requests\ContactRequest;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index(){
        $contacts = Contact::all();
        return response()->json(["success", $contacts], 200);
    }

    public function store(ContactRequest $request)
    {
        $validated = $request->validated();

        if($validated) {
            Contact::create($request->all());
            return ['message' => 'Contact updated successfully'];
        }
    }
}
