import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import BookingPage from "./pages/Booking/BookingPage";
import Home from "./pages/Home";
import PropertiesViewer from "./pages/PropertiesViewer/PropertiesViewer";
import Towers from "./pages/Towers";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tower/:towerId" element={<Towers />} />
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/inventories/all" element={<PropertiesViewer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
