import { createContext, useContext, useState, useEffect } from "react";
import { is_touch_enabled } from "../functions/helpers";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(is_touch_enabled());
  const [showDetails, setShowDetails] = useState(true);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        isMobile,
        setIsMobile,
        showDetails,
        setShowDetails,
      }}
    >
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

export const useShowDetails = () => {
  const { showDetails, setShowDetails } = useContext(AppContext);
  return { showDetails, setShowDetails };
};
