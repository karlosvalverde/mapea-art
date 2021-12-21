<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Researcher;
use App\Http\Resources\ResearcherCollection;


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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


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
