import { baseUrl } from "../data";
import { getInventories, setInventories } from "../data/inventories";
import { getFormalUnitType } from "./helpers";

export const getAllFlatsInFloor = (towerName, floorNumber) => {
  const inventories = getInventories();

  if (inventories.length == 0) {
    console.log("inventories are empty");
    return;
  }

  return inventories
    .filter((inventory) => inventory["Tower"] === towerName)
    .filter((inventory) => inventory["Floor"] === parseInt(floorNumber))
    .sort(
      (a, b) =>
        a["FlatNumber"].substring(2, a["FlatNumber"].length) -
        b["FlatNumber"].substring(2, b["FlatNumber"].length)
    );
};

export const getAllDifferentUnitsSizesInFloor = (towerName, floorNumber) => {
  let areas = [];
  getAllFlatsInFloor(towerName, parseInt(floorNumber)).forEach((inventory) => {
    const area = parseInt(inventory["Area"]);
    if (areas.findIndex((storedareas) => storedareas == area) === -1)
      areas.push(area);
  });

  return areas;
};

export const getAllAvailableFlatsInFloor = (towerName, floorNumber) =>
  getAllFlatsInFloor(towerName, parseInt(floorNumber)).filter(
    (flat) => flat["UnitStatus"] === "Available"
  );

export const getAllAvailableFlatsInTower = (towerName) =>
  getAllFlatsInTower(towerName).filter(
    (flat) => flat["UnitStatus"] === "Available"
  );

export const getAllFlatsInTower = (towerName) => {
  const inventories = getInventories();
  if (inventories.length == 0) {
    console.log("inventories are empty");
    return;
  }
  return inventories.filter((inventory) => inventory["Tower"] === towerName);
};

export const getAllFloorsInTower = (towerName) => [
  ...new Set(
    getAllFlatsInTower(towerName)
      .map((flat) => flat["Floor"])
      .sort((a, b) => parseInt(a) - parseInt(b))
  ),
];

export const getAllUnitTypesInTower = (towerName) => {
  let flatTypes = [];
  getAllFlatsInTower(towerName).forEach((inventory) => {
    const flatType = inventory["UnitType"];
    if (
      (flatType.includes("2 BHK") ||
        flatType.includes("3 BHK") ||
        flatType.includes("2.5 BHK")) &&
      flatTypes.findIndex((storedFlatTypes) => storedFlatTypes == flatType) ===
        -1
    )
      flatTypes.push(getFormalUnitType(flatType));
  });

  return [...new Set(flatTypes.sort((a, b) => parseInt(a) - parseInt(b)))];
};

export const getAllDifferentUnitsSizesInBlock = (towerName) => {
  let areas = [];
  getAllFlatsInTower(towerName).forEach((inventory) => {
    const area = parseInt(inventory["Area"]);
    if (areas.findIndex((storedareas) => storedareas == area) === -1)
      areas.push(area);
  });

  return areas;
};

export const getFlatFromPropertyId = (id) => {
  return getInventories().find((inventory) => inventory["PropertyId"] === id);
};

export const fetchAllInventories = async () => {
  const url = baseUrl + "/api/v1/allinventory";

  let response;
  try {
    response = await fetch(url);
  } catch (e) {
    setTimeout(() => {
      alert("Failed to connect to database");
    }, 500);
    return;
  }

  console.log(response);

  if (response.ok) {
    try {
      let inventories = [];
      inventories = await response.json();
      console.log(inventories);
      setInventories(inventories);
    } catch (e) {
      console.log(e);
      alert("Failed to connect to database");
    }
  } else {
    alert("HTTP-Error: " + response.status);
  }
};
