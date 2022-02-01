import React from "react";
import { BookingDetailsSectionStyle } from "./booking.style";
import { BookingDetailsForm } from "./BookingDetailsForm";

function BookingDetailsSection({ onSubmit }) {
  return (
    <BookingDetailsSectionStyle>
      <BookingDetailsForm onSubmit={onSubmit} />
    </BookingDetailsSectionStyle>
  );
}

export default BookingDetailsSection;
