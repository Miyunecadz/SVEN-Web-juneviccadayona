<?php

namespace App\DTOs;

use App\Models\Reservation;

class ReservationDTO
{
    public ?int $id;
    public string $frequency;
    public string $start_date;
    /** @var string[] */
    public array $days;
    /** @var string[] */
    public array $times;
    public ?string $notes;

    public function __construct(
        ?int $id,
        string $frequency,
        string $start_date,
        array $days,
        array $times,
        ?string $notes
    ) {
        $this->id = $id;
        $this->frequency = $frequency;
        $this->start_date = $start_date;
        $this->days = $days;
        $this->times = $times;
        $this->notes = $notes;
    }

    /**
     * Create a DTO from a Reservation Eloquent model instance.
     */
    public static function fromModel(Reservation $reservation): self
    {
        return new self(
            $reservation->id,
            $reservation->frequency,
            $reservation->start_date,
            $reservation->days ?? [],
            $reservation->times ?? [],
            $reservation->notes
        );
    }

    /**
     * Convert DTO to array (for API response, etc.)
     */
    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'frequency' => $this->frequency,
            'start_date' => $this->start_date,
            'days' => $this->days,
            'times' => $this->times,
            'notes' => $this->notes,
        ];
    }
}
