import React from "react";
import { useSelector } from "react-redux";

function SuccessPage() {
  const booking = useSelector((state) => state.booking.userData);

  return (
    <div className="container text-center mt-5">
      <h2>🎉 Booking Successful!</h2>
      <p>Thank you, {booking.name || "Traveler"}!</p>
      <p>
        Your trip to{" "}
        <strong>{booking.destination || "selected destination"}</strong> is
        confirmed.
      </p>
      <p>
        We’ve sent details to: <strong>{booking.email}</strong>
      </p>
    </div>
  );
}

export default SuccessPage;
