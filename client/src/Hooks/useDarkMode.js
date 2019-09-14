import useLocalStorage from "./useLocalStorage";
import { useEffect } from 'react';

const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode");

    useEffect(() => {
        if (darkMode == true) {
            //set body to darkmode
            if (document.getElementsByClassName('App')[0]) {
                document.getElementsByClassName('App')[0].classList.add("dark-mode");
            }
        }
        else {
            //set to light
            if (document.getElementsByClassName('App')[0]) {
                document.getElementsByClassName('App')[0].classList.remove("dark-mode");
            }
        }
    }, [darkMode])

    return [darkMode, setDarkMode];
};

export default useDarkMode;