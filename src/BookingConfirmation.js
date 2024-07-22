import React from 'react';
import { useLocation } from 'react-router-dom';
import './BookingConfirmation.css';

function BookingConfirmation() {
  const location = useLocation();
  const { name, email, mobile, bookingId } = location.state;

  return (
    <div className="booking-confirmation">
      <h1>Seat Booked Successfully!</h1>
      <p><span>Booking ID:</span> {bookingId}</p>
      <p><span>Name:</span> {name}</p>
      <p><span>Email:</span> {email}</p>
      <p><span>Mobile:</span> {mobile}</p>
    </div>
  );
}

export default BookingConfirmation;
