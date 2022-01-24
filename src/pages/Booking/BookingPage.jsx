import React from "react";
import { BookingPageStyle } from "./booking.style";
import BookingDetailsSection from "./BookingDetailsSection";
import Header from "./Header";
import PropertyDetailsSection from "./PropertyDetailsSection";

function BookingPage(props) {
  return (
    <BookingPageStyle>
      <Header />
      <div className="body">
        <PropertyDetailsSection />
        <BookingDetailsSection />
      </div>
    </BookingPageStyle>
  );
}

export default BookingPage;
