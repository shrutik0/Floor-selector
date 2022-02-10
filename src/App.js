import { useEffect, useState } from "react";
import { AppStyle } from "./App.style";
import Router from "./Router";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AppContextProvider } from "./contexts/AppContext";
import Loading from "./components/atoms/Loading";
import RotateInstruction from "./components/atoms/RotateInstruction";
import FullScreenModeAlert from "./components/atoms/FullScreenModeAlert";
import { is_touch_enabled, toggleFullscreen } from "./functions/helpers";
import Dialog from "./pages/Booking/Dialog";

const FullScreenMsg = ({ displayFullScreenMsg, setDisplayFullScreenMsg }) => {
  return (
    displayFullScreenMsg && (
      <FullScreenModeAlert
        handleYes={() => {
          toggleFullscreen();
          setDisplayFullScreenMsg(false);
        }}
        handleNo={() => setDisplayFullScreenMsg(false)}
      />
    )
  );
};

function App() {
  const [showFullScreenMsg, setShowFullScreenMsg] = useState(false);
  const isMobile = is_touch_enabled();
  useEffect(() => {
    if (isMobile) setShowFullScreenMsg(true);
    window.screen.orientation.addEventListener("change", () =>
      window.location.reload()
    );
  }, []);

  return (
    <AppContextProvider>
      <RotateInstruction />
      {isMobile && (
        <FullScreenMsg
          displayFullScreenMsg={showFullScreenMsg}
          setDisplayFullScreenMsg={setShowFullScreenMsg}
        />
      )}
      <AppStyle>
        <Loading />
        <Router />
      </AppStyle>
    </AppContextProvider>
  );
}

export default App;
