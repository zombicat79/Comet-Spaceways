import { useState } from 'react';

function useCounter(initialCount) {
    const [count, setCount] = useState(initialCount);

    function handleIncrement() {
        if (count < 9) {
            setCount((curr) => curr + 1);
        }
    }

    function handleDecrement() {
        if (count > 0) {
            setCount((curr) => curr - 1);
        }
    }

    return { count, handleIncrement, handleDecrement };
}

export default useCounter;