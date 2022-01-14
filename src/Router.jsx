import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Towers from "./pages/Towers";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tower/:towerId" element={<Towers />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
