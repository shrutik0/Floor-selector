import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SuccessPageStyle } from "./booking.style";
import BookingDetails from "./BookingDetails";
import { BookingDetailsForm } from "./BookingDetailsForm";
import DetailsSection from "./DetailsSection";
import { FormStyle } from "./form.style";

function SuccessPage() {
  const state = useState(useLocation().state);
  const [showPage, setShowPage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(state);
    if (!state) navigate("/");
    else setShowPage(true);
  }, []);

  return (
    showPage && (
      <SuccessPageStyle>
        <div className="container">
          <div className="title">Thank you for your payment</div>
          <div className="details-wrapper">
            <div className="flex">
              <div className="right">
                <BookingDetails
                  form={{ ...state[0].form, payment_id: state[0].payment_id }}
                />
              </div>
              <div>
                <div className="title sub">
                  Your Payment Details are as Below
                </div>
                <DetailsSection propertyId={state[0].property_id} />
              </div>
            </div>
          </div>
        </div>
      </SuccessPageStyle>
    )
  );
}

export default SuccessPage;
