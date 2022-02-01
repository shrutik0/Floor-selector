import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/atoms/Loading";
import { useLoading } from "./contexts/LoadingContext";
import BookingPage from "./pages/Booking/BookingPage";
import Floors from "./pages/Floors";
import Home from "./pages/Home";
import PropertiesViewer from "./pages/PropertiesViewer/PropertiesViewer";
import Towers from "./pages/Towers";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tower/:towerId" element={<Towers />} />
        <Route path="/tower/:towerId/floor/:floorId" element={<Floors />} />
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/inventories/all" element={<PropertiesViewer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
