import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function Router({ displayFullScreenMsg, setDisplayFullScreenMsg }) {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              displayFullScreenMsg={displayFullScreenMsg}
              setDisplayFullScreenMsg={setDisplayFullScreenMsg}
            />
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default Router;
