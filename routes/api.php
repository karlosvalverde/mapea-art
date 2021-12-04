<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Researcher;

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


Route::get('researcher/all', [App\Http\Controllers\ResearcherController::class, 'api']);
Route::get('researcher/{id}', function($id) {
    return Researcher::findOrFail(
        $id,
        // ['name','state'],
    );
});

Route::get("researcher/search/{search?}", [App\Http\Controllers\ResearcherController::class, 'search']);
