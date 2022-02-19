import React, { useState } from "react";
import { useDialog, useLoading } from "../../contexts/AppContext";
import {
  createOffer,
  initiateOrder,
  storeCutomer,
  validatePayment,
} from "../../api";
import { BookingPageStyle } from "./booking.style";
import BookingDetailsSection from "./BookingDetailsSection";
import Header from "./Header";
import PropertyDetailsSection from "./PropertyDetailsSection";
import { loadScript } from "../../functions/helpers";
import { useEffect } from "react";
import Dialog from "./Dialog";

function BookingPage(props) {
  const project_id = "a1qO0000001vA00";
  // const property_id = "PR" + useLocation().hash.replace("%20", " ");
  const property_id = "a1xO0000003Gese";
  const advertisement_id = "a03O000000SFVDF";

  const { setLoading } = useLoading();
  const [paymentSuccess, setPaymentSucess] = useState(false);

  const handleBookingDataSubmit = async (form) => {
    setLoading(true);
    const offerRes = await createOffer(
      form.first_name,
      form.last_name,
      form.email,
      form.phone,
      form.country,
      form.city,
      form.address,
      form.pincode,
      form.pan,
      form.aadhar,
      project_id,
      property_id,
      advertisement_id
    );

    if (!offerRes.ok) {
      alert(
        "There is an technical issue at server side, please try after some time"
      );
      setLoading(false);
      return;
    }
    const offerRes_json = JSON.parse(await offerRes.json());

    // const offerRes_json = {
    //   contactId: "test",
    //   enquiryId: "test",
    //   offerId: "test",
    //   Success: true,
    // };

    if (!offerRes_json.Success) {
      alert(offerRes_json.errorMessage);
      setLoading(false);
      return;
    }
    const { contactId, enquiryId, offerId } = offerRes_json;

    const storeRes = await storeCutomer(
      form.first_name,
      form.last_name,
      form.email,
      form.phone,
      form.country,
      form.city,
      form.address,
      form.pincode,
      form.pan,
      form.aadhar,
      { enquiryId, offerId, contactId }
    )
      .catch((e) => e)
      .then((e) => e);

    if (!storeRes.ok) {
      alert(
        "There is an technical issue at server side, please try after some time"
      );
      setLoading(false);
      return;
    }

    const { customer_id } = await storeRes.json();

    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      setLoading(false);
      return;
    }

    const orderResponse = await initiateOrder(customer_id)
      .then((e) => e.json())
      .catch((e) => e);

    if (!orderResponse) {
      alert("Order intiation failed");
      setLoading(false);
      return;
    }

    // in case any other errors like property is already booked
    if (orderResponse.msg) {
      alert(orderResponse.msg);
      setLoading(false);
      return;
    }

    const options = {
      key: orderResponse.api_key,
      currency: orderResponse.currency,
      amount: orderResponse.amount,
      order_id: orderResponse.id,
      name: "Property Booking",
      description: "Please pay amount",
      image: `${process.env.PUBLIC_URL}/logos/assl-payment-logo.png`,
      theme: {
        color: "#f37021",
      },

      notes: {
        contactId,
        enquiryId,
        offerId,
      },

      handler: async function (response) {
        console.log(response, orderResponse.id);
        const res = await validatePayment(
          orderResponse.id,
          response.razorpay_payment_id,
          response.razorpay_signature
        )
          .then((e) => e)
          .catch((e) => e);

        if (res.ok) {
          alert("payment successful !");
          setPaymentSucess(true);
        } else {
          alert("payment failed");
        }
        console.log(await res.json());
      },
      prefill: {
        name: form.first_name + " " + form.last_name,
        email: form.email,
        contact: form.phone,
      },
    };
    const paymentObject = new window.Razorpay(options);
    setLoading(false);
    paymentObject.open();
    paymentObject.on("payment.failed", function (response) {
      console.log(response);
    });
  };

  useEffect(() => {
    document.getElementById("rotate-instructions").style.display = "none";
  }, []);

  return (
    <BookingPageStyle id="booking-page">
      <Header />
      <div className="body">
        <PropertyDetailsSection />
        <BookingDetailsSection onSubmit={handleBookingDataSubmit} />
      </div>
    </BookingPageStyle>
  );
}

export default BookingPage;
