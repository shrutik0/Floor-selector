import { useEffect, useState } from "react";
import { AppStyle } from "./App.style";
import Router from "./Router";
import {
  getAllDifferentUnitsSizesInBlock,
  getAllFlatsInFloor,
  getAllFlatsInTower,
  getAllFloorsInTower,
  getAllUnitTypesInTower,
} from "./functions/inventory";
import { getInventories } from "./data/inventories";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  const [displayFullScreenMsg, setDisplayFullScreenMsg] = useState(false);

  useEffect(() => {
    if (!displayFullScreenMsg && !document.fullscreen)
      setDisplayFullScreenMsg(true);
  }, []);

  useEffect(() => {
    return;
    console.log(
      "A",
      getAllFlatsInTower("A").length,
      getAllFloorsInTower("A").length,
      getAllUnitTypesInTower("A"),
      Math.min(...getAllDifferentUnitsSizesInBlock("A")),
      Math.max(...getAllDifferentUnitsSizesInBlock("A"))
    );
    console.log(
      "B",
      getAllFlatsInTower("B").length,
      getAllFloorsInTower("B").length,
      getAllUnitTypesInTower("B"),
      Math.min(...getAllDifferentUnitsSizesInBlock("B")),
      Math.max(...getAllDifferentUnitsSizesInBlock("B"))
    );
    console.log(
      "C",
      getAllFlatsInTower("C").length,
      getAllFloorsInTower("C").length,
      getAllUnitTypesInTower("C"),
      Math.min(...getAllDifferentUnitsSizesInBlock("C")),
      Math.max(...getAllDifferentUnitsSizesInBlock("C"))
    );
    console.log(
      "D",
      getAllFlatsInTower("D").length,
      getAllFloorsInTower("D").length,
      getAllUnitTypesInTower("D"),
      Math.min(...getAllDifferentUnitsSizesInBlock("D")),
      Math.max(...getAllDifferentUnitsSizesInBlock("D"))
    );
    console.log(getInventories());
  }, []);

  return (
    <AppStyle>
      <Router />
    </AppStyle>
  );
}

export default App;
