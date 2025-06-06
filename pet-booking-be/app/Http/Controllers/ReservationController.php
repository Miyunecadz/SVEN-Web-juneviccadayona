<?php

namespace App\Http\Controllers;

use App\DTOs\ReservationDTO;
use App\Http\Requests\CreateReservationRequest;
use App\Services\ReservationService;
use Illuminate\Http\Request;

/**
 * @OA\Info(title="Reservation API", version="1.0")
 */
class ReservationController extends Controller
{
    public function __construct(private readonly ReservationService $reservationService) {}


    /**
     * @OA\Get(
     *     path="/api/reservations",
     *     summary="Get paginated list of reservations",
     *     tags={"Reservations"},
     *     @OA\Parameter(
     *         name="per_page",
     *         in="query",
     *         description="Number of items per page",
     *         required=false,
     *         @OA\Schema(type="integer", default=10)
     *     ),
     *     @OA\Parameter(
     *         name="page",
     *         in="query",
     *         description="Page number",
     *         required=false,
     *         @OA\Schema(type="integer", default=1)
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             @OA\Property(property="success", type="boolean", example=true),
     *             @OA\Property(property="message", type="string", example="Success"),
     *             @OA\Property(
     *                 property="data",
     *                 type="object",
     *                 @OA\Property(
     *                     property="items",
     *                     type="array",
     *                     @OA\Items(ref="#/components/schemas/Reservation")
     *                 ),
     *                 @OA\Property(
     *                     property="pagination",
     *                     type="object",
     *                     @OA\Property(property="current_page", type="integer", example=1),
     *                     @OA\Property(property="per_page", type="integer", example=10),
     *                     @OA\Property(property="total_pages", type="integer", example=5),
     *                     @OA\Property(property="total_items", type="integer", example=50)
     *                 )
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Bad request",
     *         @OA\JsonContent(
     *             @OA\Property(property="success", type="boolean", example=false),
     *             @OA\Property(property="message", type="string", example="Error")
     *         )
     *     )
     * )
     */
    public function index()
    {
        $reservations = $this->reservationService->getWithPagination(request('per_page', 10), request('page', 1));
        return $this->responseSuccess([
            'items' => $reservations->items(),
            'pagination' => [
                'current_page' => $reservations->currentPage(),
                'per_page' => $reservations->perPage(),
                'total_pages' => $reservations->lastPage(),
                'total_items' => $reservations->total(),
            ]
        ]);
    }

    /**
     * @OA\Post(
     *     path="/api/reservations",
     *     summary="Create a new reservation",
     *     description="Creates a new reservation with the provided details.",
     *     operationId="storeReservation",
     *     tags={"Reservations"},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(ref="#/components/schemas/ReservationCreateRequest")
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Reservation created successfully.",
     *         @OA\JsonContent(
     *             @OA\Property(property="success", type="boolean", example=true),
     *             @OA\Property(property="message", type="string", example="Success"),
     *             @OA\Property(
     *                 property="data",
     *                 ref="#/components/schemas/Reservation"
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Validation error",
     *         @OA\JsonContent(
     *             @OA\Property(property="success", type="boolean", example=false),
     *             @OA\Property(property="message", type="string", example="Validation error"),
     *             @OA\Property(
     *                 property="errors",
     *                 type="object",
     *                 additionalProperties=@OA\Property(type="array", @OA\Items(type="string"))
     *             )
     *         )
     *     )
     * )
     */
    public function store(CreateReservationRequest $request)
    {
        return $this->responseSuccess(
            $this->reservationService->storeReservation(new ReservationDTO(null, ...$request->validated()))
        );
    }

    /**
     * @OA\Get(
     *     path="/api/reservations/{id}",
     *     summary="Get a reservation by ID",
     *     description="Returns a reservation record if the ID exists, otherwise returns null.",
     *     operationId="getReservationById",
     *     tags={"Reservations"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="Reservation ID",
     *         required=true,
     *         @OA\Schema(type="integer", example=1)
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Reservation found or not found",
     *         @OA\JsonContent(
     *             @OA\Property(property="success", type="boolean", example=true),
     *             @OA\Property(property="message", type="string", example="Success"),
     *             @OA\Property(
     *                 property="data",
     *                 oneOf={
     *                     @OA\Schema(ref="#/components/schemas/Reservation"),
     *                     @OA\Schema(type="null", example=null)
     *                 },
     *                 description="Reservation object or null"
     *             )
     *         )
     *     )
     * )
     */
    public function show(string $id)
    {
        return $this->responseSuccess(
            $this->reservationService->getReservationById($id)
        );
    }

    /**
     * @OA\Delete(
     *     path="/api/reservations/{id}",
     *     summary="Delete a reservation by ID",
     *     description="Deletes a reservation by its ID. Returns success status.",
     *     operationId="deleteReservationById",
     *     tags={"Reservations"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="Reservation ID",
     *         required=true,
     *         @OA\Schema(type="integer", example=1)
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Reservation deleted successfully.",
     *         @OA\JsonContent(
     *             @OA\Property(property="success", type="boolean", example=true),
     *             @OA\Property(property="message", type="string", example="Reservation deleted successfully."),
     *             @OA\Property(property="data", type="null", example=null)
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Reservation not found.",
     *         @OA\JsonContent(
     *             @OA\Property(property="success", type="boolean", example=false),
     *             @OA\Property(property="message", type="string", example="Reservation not found."),
     *             @OA\Property(property="data", type="null", example=null)
     *         )
     *     )
     * )
     */
    public function destroy(string $id)
    {
        return $this->responseSuccess(
            $this->reservationService->deleteReservationById($id)
        );
    }
}
