import { sha256 } from "js-sha256";
import { baseUrl } from "../data";

export const getFormatedMinMaxUnitSize = (sizes) =>
  [Math.min(...sizes), Math.max(...sizes)].join(" - ");

export const getFormalNameFromNumber = (num) => {
  if (num === -1) return "Upper basement";
  if (num === "0" || num == 0) return "Ground";
  if (num === "1" || num == 1) return "1st";
  if (num === "2" || num == 2) return "2nd";
  if (num === "3" || num == 3) return "3rd";
  else return `${num} th`;
};

export const getFormalUnitType = (unitType) =>
  unitType.substr(0, unitType.length - 4);

export function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
      console.log("script loaded !");
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export const initiateOrder = async (customer_id) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    property_id: "PR# 03-2020-07234",
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
    baseUrl + "/api/v1/razorpay/payment-signature-verification",
    requestOptions
  );
};
