import { z } from "zod";

export const BookingSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  phone_number: z.string().min(1, { message: "Phone number is required" }),
  started_at: z.string().refine((date) => !isNaN(Date.parse(date)), "Invalid date"), //refine untuk mengubah format string menjadi date
  office_space_id: z.string().min(1, { message: "Office space ID is required" }),
});

export const viewBookingSchema = z.object({
  booking_trx_id: z.string().min(1, { message: "Booking transaction ID is required" }),
  phone_number: z.string().min(1, { message: "Phone number is required" }),
});
