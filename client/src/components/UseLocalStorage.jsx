import {useState} from 'react'

export const useLocalStorage = (keuy, initialValue) => {
    const item = window.localStorage.getItem(key);
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value))]
    }
    const [storedValue, setStoredValue] = useState(() => {
        return item ? JSON.parse(item) : initialValue;
    })
    return [storedValue,setValue];
}

export default useLocalStorage;