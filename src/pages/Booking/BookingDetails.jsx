import React from "react";
import { BookingDetailsStyle } from "./booking.style";
import { FormStyle } from "./form.style";

function BookingDetails({ form }) {
  console.log(form);
  return (
    <BookingDetailsStyle>
      <FormStyle>
        <div className="title sub">Booking Details</div>
        <div className="form">
          <div className="inline-fields">
            <div className="field">Payment Id</div>
            <div className="field">{form.payment_id}</div>
          </div>
          <div className="inline-fields">
            <div className="field">First Name</div>
            <div className="field">{form.first_name}</div>
          </div>
          <div className="inline-fields">
            <div className="field">Last Name</div>
            <div className="field">{form.last_name}</div>
          </div>
          <div className="inline-fields">
            <div className="field">Email Id</div>
            <div className="field">{form.email}</div>
          </div>
          <div className="inline-fields">
            <div className="field">Phone No.</div>
            <div className="field">{form.phone}</div>
          </div>
          <div className="inline-fields">
            <div className="field">Country</div>
            <div className="field">{form.country}</div>
          </div>
          <div className="inline-fields">
            <div className="field">Country Code</div>
            <div className="field">{form.country_code}</div>
          </div>
          <div className="inline-fields">
            <div className="field">City</div>
            <div className="field">{form.city}</div>
          </div>
          <div className="inline-fields">
            <div className="field">Address</div>
            <div className="field">{form.address}</div>
          </div>
          <div className="inline-fields">
            <div className="field">Pincode</div>
            <div className="field">{form.pincode}</div>
          </div>
          <div className="inline-fields">
            <div className="field">Pan</div>
            <div className="field">{form.pan}</div>
          </div>
          <div className="inline-fields">
            <div className="field">Aadhar</div>
            <div className="field">{form.aadhar ? form.aadhar : "-"}</div>
          </div>
        </div>
      </FormStyle>
    </BookingDetailsStyle>
  );
}

export default BookingDetails;
