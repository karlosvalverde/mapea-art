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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });



Route::post('/register',[App\Http\Controllers\UserController::class,'register']); // Singup URL
Route::post('/reactlogin',[App\Http\Controllers\UserController::class,'login']); // lOGIN url

Route::post('/researchers', [App\Http\Controllers\ResearcherController::class, 'store'])->name('researchers.store');
Route::delete('/researchers/{id}', [App\Http\Controllers\ResearcherController::class, 'destroy'])->name('researchers.destroy');
Route::get('/researchers/{id}', [App\Http\Controllers\ResearcherController::class, 'show'])->middleware('CORS')->name('researchers.show');
Route::get('/researchers/{id}/edit', [App\Http\Controllers\ResearcherController::class, 'edit'])->name('researchers.edit');
Route::put('/researchers/{id}', [App\Http\Controllers\ResearcherController::class, 'update'])->name('researchers.update');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
// Route::group(['prefix' => 'users', 'middleware' => 'CORS'], function ($router) {
//     Route::post('register', [App\Http\Controllers\UserController::class,'register'])->name('register.user');
//     Route::post('login', [App\Http\Controllers\UserController::class,'login'])->name('login.user');
//     Route::post('view-profile', [App\Http\Controllers\UserController::class,'viewProfile'])->name('profile.user');
//     Route::post('logout', [App\Http\Controllers\UserController::class,'logout'])->name('logout.user');
// });

// Login URL for REACT
// Route::post('login',[App\Http\Controllers\UserController::class,'test']);


Route::get('researchers', [App\Http\Controllers\ResearcherController::class, 'index']);
Route::get('researcher/search/{search?}', [App\Http\Controllers\ResearcherController::class, 'search']);


Route::get('researcher/all', [App\Http\Controllers\ResearcherController::class, 'api']);
Route::get('researcher/{id?}', function($id) {
    return Researcher::findOrFail(
        $id
    );
});
Route::get("researcher/search/{name?}", [App\Http\Controllers\ResearcherController::class, 'searchByName']);
Route::get("researcher/search/state/{state?}", [App\Http\Controllers\ResearcherController::class, 'searchByState']);
Route::get("researcher/search/university/{university?}", [App\Http\Controllers\ResearcherController::class, 'searchByUniversity']);
Route::get("researcher/search/role/{role?}", [App\Http\Controllers\ResearcherController::class, 'searchByRole']);
Route::get("researcher/search/research_field/{research_field?}", [App\Http\Controllers\ResearcherController::class, 'searchByResearchField']);
Route::get("researcher/search/keywords/{keywords?}", [App\Http\Controllers\ResearcherController::class, 'searchByKeywords']);
