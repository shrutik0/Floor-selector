import { createContext, useContext, useState } from "react";

export const loadingContext = createContext();

export const LoadingContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  return (
    <loadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </loadingContext.Provider>
  );
};

export const useLoading = () => {
  const { loading, setLoading } = useContext(loadingContext);
  return { loading, setLoading };
};
