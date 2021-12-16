<?php

use Illuminate\Support\Facades\Route;
use App\Models\Researcher;

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

// Route::get('/', function () {

//    $researchers = DB::table('mapeamento')->get();

//    // return view('app', ['researchers' => $researchers]);
//    return view('layouts.app', ["researchers" => $researchers]);
// });

// // Auth::routes();

// Route::get("/search", [App\Http\Controllers\ResearcherController::class, 'search'])->name("search");

// // Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
// Route::get('/test', [App\Http\Controllers\ResearcherController::class, 'test_2'])->name('test');
// Route::resource('researchers', 'App\Http\Controllers\ResearcherController');
// Route::get('researchers/{id}', [App\Http\Controllers\ResearcherController::class, 'index','show'])->name('show');
// Route::resource('tasks', 'App\Http\Controllers\TaskController');

Route::view("/{path?}", "app");
