import { getInventories } from "../data/inventories";
import { getFormalUnitType } from "./helpers";

export const getAllFlatsInFloor = (towerName, floorNumber) => {
  const inventories = getInventories();

  if (inventories.length == 0) {
    console.log("inventories are empty");
    return;
  }

  return inventories
    .filter((inventory) => inventory["Tower Name"] === towerName)
    .filter((inventory) => inventory["Floor Number"] === floorNumber)
    .sort(
      (a, b) =>
        a["Flat Number"].substring(2, a["Flat Number"].length) -
        b["Flat Number"].substring(2, b["Flat Number"].length)
    );
};

export const getAllDifferentUnitsSizesInFloor = (towerName, floorNumber) => {
  let areas = [];
  getAllFlatsInFloor(towerName, floorNumber).forEach((inventory) => {
    const area = parseInt(inventory["SBU Area (sq.ft)"]);
    if (areas.findIndex((storedareas) => storedareas == area) === -1)
      areas.push(area);
  });

  return areas;
};

export const getAllAvailableFlatsInFloor = (towerName, floorNumber) =>
  getAllFlatsInFloor(towerName, floorNumber).filter(
    (flat) => flat["Unit Status"] === "Available"
  );

export const getAllAvailableFlatsInTower = (towerName) =>
  getAllFlatsInTower(towerName).filter(
    (flat) => flat["Unit Status"] === "Available"
  );

export const getAllFlatsInTower = (towerName) => {
  const inventories = getInventories();
  if (inventories.length == 0) {
    console.log("inventories are empty");
    return;
  }
  return inventories.filter(
    (inventory) => inventory["Tower Name"] === towerName
  );
};

export const getAllFloorsInTower = (towerName) => [
  ...new Set(
    getAllFlatsInTower(towerName)
      .map((flat) => flat["Floor Number"])
      .sort((a, b) => parseInt(a) - parseInt(b))
  ),
];

export const getAllUnitTypesInTower = (towerName) => {
  let flatTypes = [];
  getAllFlatsInTower(towerName).forEach((inventory) => {
    const flatType = inventory["Unit Type"];
    if (
      flatTypes.findIndex((storedFlatTypes) => storedFlatTypes == flatType) ===
      -1
    )
      flatTypes.push(getFormalUnitType(flatType));
  });

  return [...new Set(flatTypes)];
};

export const getAllDifferentUnitsSizesInBlock = (towerName) => {
  let areas = [];
  getAllFlatsInTower(towerName).forEach((inventory) => {
    const area = parseInt(inventory["SBU Area (sq.ft)"]);
    if (areas.findIndex((storedareas) => storedareas == area) === -1)
      areas.push(area);
  });

  return areas;
};
