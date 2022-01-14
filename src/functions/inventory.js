import { getInventories } from "../data/inventories";

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

export const getAllFloorsInTower = (towerName) => {
  let floors = [];
  getAllFlatsInTower(towerName).forEach((inventory) => {
    const floor = inventory["Floor Number"];
    if (floors.findIndex((storedFloor) => storedFloor == floor) === -1)
      floors.push(floor);
  });
  return floors;
};

export const getAllUnitTypesInTower = (towerName) => {
  let flatTypes = [];
  getAllFlatsInTower(towerName).forEach((inventory) => {
    const flatType = inventory["Unit Type"];
    if (
      flatTypes.findIndex((storedFlatTypes) => storedFlatTypes == flatType) ===
      -1
    )
      flatTypes.push(flatType);
  });

  return [
    ...new Set(
      flatTypes.map((flatType) => flatType.substr(0, flatType.length - 4))
    ),
  ];
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
