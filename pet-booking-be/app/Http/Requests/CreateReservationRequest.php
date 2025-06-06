<?php

namespace App\Http\Requests;

use App\Enums\DaysEnum;
use App\Enums\FrequencyEnum;
use App\Enums\TimesEnum;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;
use Illuminate\Http\Exceptions\HttpResponseException;


/**
 * @OA\Schema(
 *   schema="ReservationCreateRequest",
 *   type="object",
 *   required={"frequency", "start_date", "days", "times"},
 *   @OA\Property(property="frequency", type="string", enum={"recurring", "one-time"}, example="recurring"),
 *   @OA\Property(property="start_date", type="string", format="date", example="2025-06-06"),
 *   @OA\Property(
 *       property="days",
 *       type="array",
 *       @OA\Items(type="string", enum={"mon", "tue", "wed", "thu", "fri", "sat", "sun"}),
 *       example={"mon", "tue"}
 *   ),
 *   @OA\Property(
 *       property="times",
 *       type="array",
 *       @OA\Items(type="string", enum={"morning", "afternoon", "evening"}),
 *       example={"morning", "afternoon"}
 *   ),
 *   @OA\Property(property="notes", type="string", maxLength=300, example="Just have fun")
 * )
 */
class CreateReservationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'frequency' => ['required', new Enum((FrequencyEnum::class))],
            'start_date' => ['required', 'date', 'after_or_equal:today'],
            'days' => ['required', 'array', 'min:1'],
            'days.*' => ['required', new Enum(DaysEnum::class)],
            'times' => ['required', 'array', 'min:1'],
            'times.*' => ['required', new Enum(TimesEnum::class)],
            'notes' => ['nullable', 'string']
        ];
    }

        /**
     * Handle a failed validation attempt.
     *
     * @param  \Illuminate\Contracts\Validation\Validator  $validator
     * @throws \Illuminate\Http\Exceptions\HttpResponseException
     */
    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(
            response()->json([
                'success' => false,
                'message' => 'Validation error',
                'errors' => $validator->errors(),
            ], 422)
        );
    }
}
