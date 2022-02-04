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
import {
  LoadingContext,
  AppContextProvider,
  useViewport,
} from "./contexts/LoadingContext";
import Loading from "./components/atoms/Loading";

function App() {
  return (
    <AppContextProvider>
      <AppStyle>
        <Loading />
        <Router />
      </AppStyle>
    </AppContextProvider>
  );
}

export default App;
