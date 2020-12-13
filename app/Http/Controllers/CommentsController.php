<?php

namespace App\Http\Controllers;

use App\Comment;
use App\Http\Requests\CommentRequest;
use App\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CommentsController extends Controller
{

    public function index()
    {
        $comments = Comment::with('user')->get();
        return response()->json(["success", $comments], 200);
    }

    public function create()
    {
        //
    }


    public function store(CommentRequest $request)
    {

        $validated = $request->validated();

        if($validated) {
            if(empty($request['id'])) {
                Comment::create([
                    'name' => $request['name'],
                    'email' => $request['email'],
                    'comment' => $request['comment'],
                    'created_at' => date('Y-m-d H:i:s'),
                ]);
            } else {
                Comment::create([
                    'name' => $request['name'],
                    'email' => $request['email'],
                    'comment' => $request['comment'],
                    'created_at' => date('Y-m-d H:i:s'),
                    'user_id' => $request['id'],
                ]);
            }

            return ['message' => 'Service created successfully'];
        }



    }


    public function show($id)
    {
        $comments = Comment::where('user_id', $id)->get();
        return response()->json(["success", $comments], 200);
    }


    public function edit($id)
    {
        //
    }


    public function update(CommentRequest $request, $id)
    {

        $validated = $request->validated();

        if($validated) {
            $comment = Comment::findOrFail($id);
            $comment->update($request->all());
            return ['message' => 'Service updated successfully'];
        }

    }


    public function destroy($id)
    {
        $comment = Comment::findOrFail($id);
        $comment->delete();
        return ['message' => "Service deleted successfully"];
    }
}
