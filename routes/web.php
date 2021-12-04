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

// Route::get("/", function() {
//     return view("index");
// });

//  Route::get('/', function () {

//     // $mapeamento = DB::table('mapeamento')->get();

//     // return view('app', ['researchers' => $researchers]);
//     return view('researchers.search', ["researchers" => $researchers]);
//  });

Auth::routes();

Route::get('/', [App\Http\Controllers\ResearcherController::class, 'index'])->name('app');
// Route::get('/api', [App\Http\Controllers\ResearcherController::class, 'api'])->name('api');
// Route::get('/api/{id}', function($id) {
//     return Researcher::findOrFail(
//         $id,
//         // ['name','state'],
//     );
// });

Route::get("/search", [App\Http\Controllers\ResearcherController::class, 'search'])->name("search");

// Gets Researcher by University
// Route::get('/api/university/{university}/{page}', function($university, $page) {
//     return Researcher::where('university', $university)::all();
//     return Researcher::findOrFail('university', $university)->simplePaginate(
//         10,
//         ['name','state'],
//         'page',
//         $page
//     );
// });
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::resource('researchers', 'App\Http\Controllers\ResearcherController');
Route::get('researchers/{id}', [App\Http\Controllers\ResearcherController::class, 'show'])->name('show');
Route::resource('tasks', 'App\Http\Controllers\TaskController');
