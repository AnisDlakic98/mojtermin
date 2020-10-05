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


Route::get('country/{country}/cities', 'CountryController@getCities');


Route::get('/register-customer', 'WebsiteController@registerCustomer');
Route::get('/register-owner', 'WebsiteController@registerOwner');


Route::get('/user', 'CustomerController@index')->name('user');
Route::get('/admin', 'AdminController@index')->name('admin');
//Route::get('{path}', 'HomeController@index')->where('path', '.*'); // solve refreshing component
