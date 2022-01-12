import { useEffect, useState } from "react";
import { AppStyle } from "./App.style";
import Router from "./Router";

function App() {
  const [displayFullScreenMsg, setDisplayFullScreenMsg] = useState(false);

  useEffect(() => {
    if (!displayFullScreenMsg && !document.fullscreen)
      setDisplayFullScreenMsg(true);
  }, []);

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
