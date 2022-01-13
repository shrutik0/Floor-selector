import { useEffect, useState } from "react";
import { AppStyle } from "./App.style";
import Router from "./Router";
import Papa from "papaparse";
import file from "./data/Inventory-Belair.csv";
import { getJsonFromCsv } from "./functions/readCsv";
import {
  getAllDifferentUnitsSizesInBlock,
  getAllFlatsInTower,
  getAllFloorsInTower,
  getAllUnitTypesInTower,
  setInventories,
} from "./functions/inventory";

function App() {
  const [displayFullScreenMsg, setDisplayFullScreenMsg] = useState(false);
  const [isInventoriesDataStored, setIsInventoriesDataStored] = useState(false);
  async function storeJson() {
    const data = await getJsonFromCsv(file);
    setInventories(data.data);
    setIsInventoriesDataStored(true);
  }

  useEffect(() => {
    if (!displayFullScreenMsg && !document.fullscreen)
      setDisplayFullScreenMsg(true);
    // storeJson();
  }, []);

  // useEffect(() => {
  //   if (isInventoriesDataStored) {
  //     console.log(
  //       "A",
  //       getAllFlatsInTower("A").length,
  //       getAllFloorsInTower("A").length,
  //       getAllUnitTypesInTower("A"),
  //       Math.min(...getAllDifferentUnitsSizesInBlock("A")),
  //       Math.max(...getAllDifferentUnitsSizesInBlock("A"))
  //     );
  //     console.log(
  //       "B",
  //       getAllFlatsInTower("B").length,
  //       getAllFloorsInTower("B").length,
  //       getAllUnitTypesInTower("B"),
  //       Math.min(...getAllDifferentUnitsSizesInBlock("B")),
  //       Math.max(...getAllDifferentUnitsSizesInBlock("B"))
  //     );
  //     console.log(
  //       "C",
  //       getAllFlatsInTower("C").length,
  //       getAllFloorsInTower("C").length,
  //       getAllUnitTypesInTower("C"),
  //       Math.min(...getAllDifferentUnitsSizesInBlock("C")),
  //       Math.max(...getAllDifferentUnitsSizesInBlock("C"))
  //     );
  //     console.log(
  //       "D",
  //       getAllFlatsInTower("D").length,
  //       getAllFloorsInTower("D").length,
  //       getAllUnitTypesInTower("D"),
  //       Math.min(...getAllDifferentUnitsSizesInBlock("D")),
  //       Math.max(...getAllDifferentUnitsSizesInBlock("D"))
  //     );
  //   }
  // }, [isInventoriesDataStored]);

  return (
    <AppStyle>
      <Router
        displayFullScreenMsg={displayFullScreenMsg}
        setDisplayFullScreenMsg={setDisplayFullScreenMsg}
      />
    </AppStyle>
  );
}

export default App;
