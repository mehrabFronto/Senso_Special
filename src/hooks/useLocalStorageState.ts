import { useEffect, useState } from "react";

const useLocalStorageState = (key: string, initialState: unknown) => {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialState;
    }
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [value, key]);

  return [value, setValue] as const;
};

export default useLocalStorageState;
