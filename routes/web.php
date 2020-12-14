<?php

use App\Category;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Auth::routes(['verify' => true]);

Route::get('/', function () {
    return view('welcome');
});

Route::get('/', 'WebsiteController@welcomePageContent');
Route::get('/about', 'WebsiteController@about');
Route::get('/contact', 'WebsiteController@contact');
Route::get('/faqs', 'WebsiteController@faqs');
Route::get('/search', 'WebsiteController@search');
Route::get('/get/salons', 'WebsiteController@paginateSalons');
Route::get('/get/categories', 'WebsiteController@getCategories');


Route::post('/images-upload', 'ImageUploaderController@upload');
Route::get('country/{country}/cities', 'CountryController@getCities');
Route::get('salon-details/{id}', 'SalonController@show');

Route::get('/register-customer', 'WebsiteController@registerCustomer');
Route::get('/register-owner', 'WebsiteController@registerOwner');

Route::get('/user', 'CustomerController@index')->name('user');
Route::get('/owner', 'AdminController@index')->name('owner');
Route::get('/superadmin', 'SuperadminController@index')->name('superadmin');


Route::get('{path}', 'WebsiteController@panel')->where('path', '.*');
Route::post('comments/delete/{id}', 'CommentsController@destroy');




