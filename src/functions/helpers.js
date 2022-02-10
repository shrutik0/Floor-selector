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
  title: `${towerId} BLOCK`,
  features: [
    `${getAllFloorsInTower(towerId).length} Floors | ${
      getAllFlatsInTower(towerId).length
    } Apartments`,
    `Typology: ${getAllUnitTypesInTower(towerId).join(" - ")}`,
    `Area: ${getFormatedMinMaxUnitSize(
      getAllDifferentUnitsSizesInBlock(towerId)
    )} Sq. ft`,
  ],
});

export const getFloorInfo = (towerId, floor) => ({
  title: `${getFormalNameFromNumber(floor)} Floor`,
  features: [
    `${getAllFlatsInFloor(towerId, floor).length} Apartments  | ${
      getAllAvailableFlatsInFloor(towerId, floor).length
    } Available`,
    `Typology: ${[getAllUnitTypesInTower(towerId).join(" and ")]}s`,
    `Area:  ${getFormatedMinMaxUnitSize(
      getAllDifferentUnitsSizesInFloor(towerId, floor)
    )} Sq.fts`,
  ],
});

export const getFlatInfo = (towerId, floorNo, flatIndex) => {
  const flats = getAllFlatsInFloor(towerId, floorNo);
  const flat = flats[flatIndex];
  return {
    title: `${flat["Flat Number"]}`,
    features: [
      `Typology: ${flat["Unit Type"]} `,
      `Area: ${parseInt(flat["Total Carpet Area (sq.ft)"]).toFixed(0)} Sq.fts`,
      `Direction:  ${flat["Direction"].substring(
        0,
        flat["Direction"].length - "Facing".length
      )} `,
      `Unit Status: ${flat["Unit Status"]} `,
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

export const isFloorBooked = (towerId, floorId) => {
  return getAllAvailableFlatsInFloor(towerId, floorId).length === 0;
};

export const rupeeIndian = Intl.NumberFormat("en-IN", {
  currency: "INR",
});
