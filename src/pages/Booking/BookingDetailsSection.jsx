import React from "react";
import { BookingDetailsSectionStyle } from "./booking.style";
import { BookingDetailsForm } from "./BookingDetailsForm";

function BookingDetailsSection(props) {
  return (
    <BookingDetailsSectionStyle>
      <BookingDetailsForm />
    </BookingDetailsSectionStyle>
  );
}

export default BookingDetailsSection;
