<?php

namespace App\Services;

use App\DTOs\ReservationDTO;
use App\Models\Reservation;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class ReservationService
{
    /**
     * Retrieve paginated list of reservations.
     *
     * @param int $perPage Number of results per page. Default is 10.
     * @param int $page    Page number to retrieve. Default is 1.
     * @return \Illuminate\Pagination\LengthAwarePaginator
     */
    public function getWithPagination(int $perPage = 10, int $page = 1): LengthAwarePaginator
    {
        return Reservation::paginate($perPage, ['*'], 'page', $page);
    }

    /**
     * Retrieve a specific reservation by its ID.
     *
     * @param int $id Reservation ID.
     * @return Reservation|null
     */
    public function getReservationById(int $id): Reservation | null
    {
        return Reservation::find($id);
    }

    /**
     * Delete a specific reservation by its ID.
     *
     * @param int $id Reservation ID.
     * @return void
     */
    public function deleteReservationById(int $id): void
    {
        Reservation::destroy($id);
    }

    /**
     * Store a new reservation.
     *
     * @param \App\DTOs\ReservationDTO $reservation Data Transfer Object containing reservation data.
     * @return Reservation
     */
    public function storeReservation(ReservationDTO $reservation): Reservation
    {
        return Reservation::create($reservation->toArray());
    }
}
