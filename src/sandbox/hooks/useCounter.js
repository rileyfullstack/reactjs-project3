import { useState } from "react";

export default function useCounter(initialValue) {
    const [counter, setCounter] = useState(initialValue);
    const inc = () => setCounter((prev) => prev + 1);
    const dec = () => setCounter((prev) => prev - 1);
    const reset = () => setCounter(initialValue);
    return {counter, inc, dec, reset};
}