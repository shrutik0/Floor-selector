import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import BookingPage from "./pages/Booking/BookingPage";
import SuccessPage from "./pages/Booking/SuccessPage";
import Flats from "./pages/Flats";
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
        <Route
          path="/tower/:towerId/floor/:floorId/flat/:flatNumber"
          element={<Flats />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/booking/:property_id" element={<BookingPage />} />
        <Route path="/booking/success" element={<SuccessPage />} />
        <Route path="/inventories/all" element={<PropertiesViewer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
