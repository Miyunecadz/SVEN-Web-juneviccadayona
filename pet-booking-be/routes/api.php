<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::apiResource('reservations', App\Http\Controllers\ReservationController::class);
