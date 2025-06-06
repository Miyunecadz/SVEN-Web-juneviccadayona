<?php

namespace App\Enums;

enum FrequencyEnum: string {
    case RECURRING = 'recurring';
    case ONE_TIME = 'one-time';
}
