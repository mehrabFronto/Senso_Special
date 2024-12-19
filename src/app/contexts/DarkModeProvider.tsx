"use client";

import useLocalStorageState from "@/hooks/useLocalStorageState";
import React, { createContext, useContext, useEffect, ReactNode } from "react";

interface DarkModeContextProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextProps | undefined>(
  undefined
);

interface DarkModeProviderProps {
  children: ReactNode;
}

const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    "isDarkMode",
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const toggleDarkMode = () => {
    setIsDarkMode((prev: boolean) => !prev);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      }
    }
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;

export function useDarkMode(): DarkModeContextProps {
  const context = useContext(DarkModeContext);

  if (context === undefined) {
    throw new Error("DarkModeContext was used outside of DarkModeProvider");
  }

  return context;
}
