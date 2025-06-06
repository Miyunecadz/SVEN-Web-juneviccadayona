<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @OA\Schema(
 *   schema="Reservation",
 *   type="object",
 *   required={"frequency", "start_date", "days", "times"},
 *   @OA\Property(property="id", type="integer", example=1),
 *   @OA\Property(property="frequency", type="string", example="recurring"),
 *   @OA\Property(property="start_date", type="string", format="date", example="2025-06-06"),
 *   @OA\Property(
 *     property="days",
 *     type="array",
 *     @OA\Items(type="string", example="mon"),
 *     example={"mon","tue"}
 *   ),
 *   @OA\Property(
 *     property="times",
 *     type="array",
 *     @OA\Items(type="string", example="morning"),
 *     example={"morning","afternoon","evening"}
 *   ),
 *   @OA\Property(property="notes", type="string", example="Just have fun")
 * )
 */
class Reservation extends Model
{
    protected $fillable = [
        'frequency',
        'start_date',
        'days',
        'times',
        'notes',
    ];

    protected $casts = [
        'days' => 'array',
        'times' => 'array'
    ];
}
