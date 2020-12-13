<?php

namespace App\Http\Controllers;

use Defuse\Crypto\File;
use http\Env\Response;
use Illuminate\Http\Request;

class ImageUploaderController extends Controller
{

    public function upload(Request $request)
    {
        if (count($request->images)) {
            foreach ($request->images as $image) {
                $image->store('public');
            }
        }

        return response()->json(['message' => 'success']);
    }
}
