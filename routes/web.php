<?php

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

Route::get('/', function () {

    // $mapeamento = DB::table('mapeamento')->get();

    // return view('app', ['researchers' => $researchers]);
    return view('app');
});

Auth::routes();

Route::get('/', [App\Http\Controllers\ResearcherController::class, 'index'])->name('app');
Route::get('/api', [App\Http\Controllers\ResearcherController::class, 'api'])->name('app');
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
// Route::resource('researchers', 'App\Http\Controllers\ResearcherController');
Route::resource('tasks', 'App\Http\Controllers\TaskController');
