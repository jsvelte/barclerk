<?php

use App\Http\Controllers\ClauseController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\CourtAppearanceController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DashboardExtensionController;
use App\Http\Controllers\ExtensionController;
use App\Http\Controllers\GrantController;
use App\Http\Controllers\TimeEntryController;
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

Route::group(['middleware' => 'auth:sanctum', 'prefix' => '/v1'], function () {
  Route::get('/', function () {
    return response()->json([
      "message" => "You are at the root of this api",
      "version" => "/v1"
    ]);
  });
  Route::get('/v1', function () {
    return response()->json([
      "message" => "You are at the version 1 of this api",
      "more" => "api documentation"
    ]);
  });

  Route::apiResource('client', ClientController::class)->only(['index', 'store']);
  Route::apiResource('client.grant', GrantController::class);
  Route::get('clause', ClauseController::class);
  Route::apiResource('client.time-entry', TimeEntryController::class)->only(['index', 'store', 'update']);
  Route::get('extension/{client}', ExtensionController::class);
  Route::apiResource('client.court-appearance', CourtAppearanceController::class)->only(['index', 'store', 'update']);
  Route::get('dashboard/{client}', DashboardController::class);
  Route::get('dashboard/{client}/extension/{grant}', DashboardExtensionController::class);
});


require __DIR__ . '/user/auth.php';
require __DIR__ . '/user/user.php';
