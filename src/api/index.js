import { baseUrl } from "../data";

export const initiateOrder = async (customer_id, property_id) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    property_id: property_id,
    project_id: "a1q2u000000boHd",
    cutomer_details: customer_id,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  return await fetch(baseUrl + "/api/v1/razorpay/order", requestOptions);
};

export const storeCutomer = async (
  fname,
  lname,
  email,
  phone,
  country,
  city,
  address,
  pincode,
  pan_no,
  aadhar_no,
  property_details
) => {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    first_name: fname,
    last_name: lname,
    email,
    phone,
    country,
    city,
    address,
    pincode,
    pan_no,
    aadhar_no,
    property_details,
  });

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return await fetch(baseUrl + "/api/v1/store-customer/", requestOptions);
};

export const validatePayment = async (
  order_id,
  razorpay_payment_id,
  razorpay_signature
) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    payment_id: razorpay_payment_id,
    order_id: order_id,
    signature: razorpay_signature,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return await fetch(
    baseUrl + "/api/v1/razorpay/payment-verification",
    requestOptions
  );
};

export const createOffer = async (
  fname,
  lname,
  email,
  phone,
  country,
  city,
  address,
  pincode,
  pan_no,
  aadhar_no,
  project_id,
  property_id,
  advertisement_id
) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify([
    {
      firstName: fname,
      lastName: lname,
      mobileNumber: phone,
      email: email,
      city: city,
      address: address,
      country: country,
      pinCode: pincode,
      panNumber: pan_no,
      aadharNumber: aadhar_no,
      projectId: project_id,
      advertisementId: advertisement_id,
      propertyId: property_id,
    },
  ]);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return await fetch(baseUrl + "/api/v1/create-offer/", requestOptions);
};
