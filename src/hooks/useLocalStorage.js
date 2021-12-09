import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    })

    const setValue = (value) => {
        try {
            // allowing function input
            const valueStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueStore);
            console.log(`set value of ${key} to ${valueStore}`);
            window.localStorage.setItem(key, JSON.stringify(valueStore));
        } catch (error) {
            console.error(error);
        }
    }

    return [storedValue, setValue];
}