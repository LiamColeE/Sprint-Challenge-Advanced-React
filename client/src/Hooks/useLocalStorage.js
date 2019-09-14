import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    if(item){
        return JSON.parse(item);
    }
    else{
        return initialValue;
    }
  });

  const setValue = value => {
    // Save state
    setStoredValue(value);
    // Save to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
export default useLocalStorage;