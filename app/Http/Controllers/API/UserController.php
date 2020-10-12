<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
//        $this->authorize('isAdmin');
    }

    public function index()
    {
        return User::latest()->paginate(10);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string|min:2|max:191',
            'email' => 'required|string|email|max:191|unique:users',
            'password' => 'required|string|min:8',
            'type' => 'required',
        ]);
        return User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'type' => $request['type'],
            'bio' => $request['bio'],
            'photo;' => $request['photo'],
            'password' => Hash::make($request['password'])
        ]);
    }

    public function show($id)
    {
        //
    }

    public function profile()
    {
        $user = auth('api')->user();
        $salon = User::with('salon')->where('id', auth()->id())->first()->salon;
        return response()->json(['user' => $user, 'salon' => $salon], 200);
    }

    public function updateProfile(Request $request)
    {
        $user = auth('api')->user();

        $this->validate($request, [
            'name' => 'required|string|max:191',
            'email' => 'required|string|email|max:191|unique:users,email,' . $user->id,
            'password' => 'sometimes|required|min:8'
        ]);

        $currentPhoto = $user->photo;
        // nista ne ubacuj ako je ista slika
        if ($request->photo != $currentPhoto) {
            $name = time() . '.' . explode('/', explode(':', substr($request->photo, 0, strpos($request->photo, ';')))[1])[1];

            \Image::make($request->photo)->save(public_path('img/profile/') . $name);

            // merdzujemo photo u nas request koji saljemo na update
            $request->merge(['photo' => $name]);

            // izbrisi prethodnu obavezno, da se ne gomilaju slike
            $userPhoto = public_path('img/profile/') . $currentPhoto;
            if (file_exists($userPhoto)) {
                @unlink($userPhoto);
            }
        }

        if (!empty($request->password)) {
            $request->merge(['password' => Hash::make($request['password'])]);
        }

        $user->update($request->all());
        return ['message' => "Success"];
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $this->validate($request, [
            'name' => 'required|string|min:2|max:191',
            'email' => 'required|string|email|max:191|unique:users,email,' . $user->id,
            'password' => 'sometimes|min:8',
        ]);

        $user->update($request->all());
        return ['message' => "User updated successfully"];
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return ['message' => "User deleted successfully"];
    }
}
