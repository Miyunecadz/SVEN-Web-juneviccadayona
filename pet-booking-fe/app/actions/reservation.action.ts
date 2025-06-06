"use server";

import axios from "axios";
import { createReservation } from "../helpers/api/reservationApi";

export type ServerActionError =
  | { type: "connection-error"; message: string }
  | { type: "validation-error"; message: string; errors?: Record<string, string[]> }
  | { type: "server-error"; message: string }
  | { type: "unknown-error"; message: string };

export type ReservationData = {
  frequency: string;
  start_date: string;
  days: string[];
  times: string[];
  notes?: string;
};

export async function createReservationAction(data: ReservationData) {
  try {
    const response = await createReservation(data);
    return { type: "success", data: response.data };
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      if (err.code === "ECONNREFUSED" || err.code === "ENOTFOUND") {
        // Connection error
        return { type: "connection-error", message: "Cannot connect to the server." };
      }

      const status = err.response?.status;

      if (status === 422) {
        // Validation error (Laravel & many APIs)
        return {
          type: "validation-error",
          message: "Validation failed.",
          errors: err.response?.data?.errors || {}
        };
      }

      if (status && status >= 500) {
        // Server error
        return { type: "server-error", message: "Internal server error." };
      }

      // Other known axios errors
      return { type: "unknown-error", message: err.message };
    }

    // Non-axios error (maybe thrown by your own code)
    return { type: "unknown-error", message: "An unknown error occurred." };
  }
}
