import { useEffect, useState } from "react";
/**
 * A custom hook that returns a state variable and setter for that variable
 * which updates the value after the specified delay
 * @param {Any} initialValue - Initial value
 * @param {Number} delay - The delay period after which the value has to be changed
 *
 * @author Karthik
 */
const useDebounce = (initialValue = "", delay) => {
  const [actualValue, setActualValue] = useState(initialValue);
  const [debounceValue, setDebounceValue] = useState(initialValue);
  useEffect(() => {
    const debounceId = setTimeout(() => setDebounceValue(actualValue), delay);
    return () => clearTimeout(debounceId);
  }, [actualValue, delay]);
  return [debounceValue, setActualValue];
};

export default useDebounce;