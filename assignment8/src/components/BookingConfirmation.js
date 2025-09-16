import React from "react";
import { useLocation } from "react-router-dom";

export default function BookingConfirmation() {
  const { state } = useLocation();
  const bookingId = "BK" + Math.floor(Math.random() * 10000);

  return (
    <div style={{ padding: "20px" }}>
      <h2>✅ Seat Booked Successfully!</h2>
      <p><strong>Booking ID:</strong> {bookingId}</p>
      <p><strong>Name:</strong> {state?.name}</p>
      <p><strong>Email:</strong> {state?.email}</p>
      <p><strong>Mobile:</strong> {state?.mobile}</p>
    </div>
  );
}
