import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import BookingPage from "./pages/Booking/BookingPage";
import Home from "./pages/Home";
import Towers from "./pages/Towers";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tower/:towerId" element={<Towers />} />
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
