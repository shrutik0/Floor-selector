import { createContext, useContext, useState, useEffect } from "react";
import { is_touch_enabled } from "../functions/helpers";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(is_touch_enabled());

  return (
    <AppContext.Provider value={{ loading, setLoading, isMobile, setIsMobile }}>
      {children}
    </AppContext.Provider>
  );
};

export const useLoading = () => {
  const { loading, setLoading } = useContext(AppContext);
  return { loading, setLoading };
};

export const useViewport = () => {
  const { isMobile, setIsMobile } = useContext(AppContext);
  return { isMobile, setIsMobile };
};
