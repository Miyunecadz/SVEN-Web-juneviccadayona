import { ReservationData } from "@/app/actions/reservation.action";
import http from "./http";

export const getReservation = (id: string | number) =>
  http.get(`/reservations/${id}`);
export const createReservation = (data: ReservationData) =>
  http.post("/reservations", data);
export const deleteReservation = (id: string | number) =>
  http.delete(`/reservations/${id}`);
