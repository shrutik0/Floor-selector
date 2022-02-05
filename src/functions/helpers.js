import { sha256 } from "js-sha256";
import { baseUrl } from "../data";
import {
  getAllAvailableFlatsInFloor,
  getAllDifferentUnitsSizesInBlock,
  getAllDifferentUnitsSizesInFloor,
  getAllFlatsInFloor,
  getAllFlatsInTower,
  getAllFloorsInTower,
  getAllUnitTypesInTower,
} from "./inventory";

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

function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time =
    date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
  return time;
}

console.log(timeConverter(1643712224));

export function is_touch_enabled() {
  return (
    ("ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0) &&
    window.matchMedia("(pointer: coarse)").matches
  );
}

export const getTowerInfo = (towerId) => ({
  id: towerId,
  title: `${towerId} Block`,
  features: [
    `${getAllUnitTypesInTower(towerId).join(" - ")}`,
    `${getAllFloorsInTower(towerId).length} Floors`,
    `${getAllFlatsInTower(towerId).length} Flats`,
    `${getFormatedMinMaxUnitSize(
      getAllDifferentUnitsSizesInBlock(towerId)
    )} Sq. ft`,
  ],
});

export const getFloorInfo = (towerId, floor) => ({
  title: `${getFormalNameFromNumber(floor)} floor`,
  features: [
    `${getAllFlatsInFloor(towerId, floor).length} Flats`,
    `${[getAllUnitTypesInTower(towerId).join(" and ")]}`,
    `${getFormatedMinMaxUnitSize(
      getAllDifferentUnitsSizesInFloor(towerId, floor)
    )} Sq.fts`,
    `${getAllAvailableFlatsInFloor(towerId, floor).length} Available`,
  ],
});

export const getFlatInfo = (towerId, floorNo, flatIndex) => {
  const flats = getAllFlatsInFloor(towerId, floorNo);
  const flat = flats[flatIndex];
  return {
    title: `${flat["Flat Number"]}`,
    features: [
      `${flat["Unit Type"]} `,
      `${parseInt(flat["Total Carpet Area (sq.ft)"]).toFixed(0)} Sq.fts`,
      `${flat["Direction"]} `,
    ],
  };
};

export function getFullscreenElement() {
  return (
    document.fullscreenElement || //standard property
    document.webkitFullscreenElement || //safari/opera support
    document.mozFullscreenElement || //firefox support
    document.msFullscreenElement
  ); //ie/edge support
}

export function toggleFullscreen() {
  if (getFullscreenElement()) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen().catch(console.log);
  }
}
