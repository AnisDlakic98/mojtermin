<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResources(['user' => 'API\UserController']);
Route::get('profile', 'API\UserController@profile');
Route::put('profile', 'API\UserController@updateProfile');

Route::get('services/{id}', 'WebsiteController@getServicesByUserAPI');
Route::post('services/{salonId}', 'ServiceController@store');

Route::apiResources(['salons' => 'SalonController']);
Route::apiResources(['services' => 'ServiceController']);


Route::post('salons/put/{salonId}', 'SalonController@update');
Route::put('workhours/{salonId}', 'SalonController@workHours');



Route::get('appointments', 'UserController@appointments');
Route::apiResources(['appointments' => 'AppointmentController']);
Route::apiResources(['comments' => 'CommentsController']);
Route::apiResources(['testimonials' => 'TestimonialController']);
Route::apiResources(['about' => 'AboutController']);
Route::apiResources(['contact' => 'ContactController']);
Route::apiResources(['faqs' => 'FaqController']);


//Route::get('comments/{id}', 'CommentsController@getCommentsByUser');








