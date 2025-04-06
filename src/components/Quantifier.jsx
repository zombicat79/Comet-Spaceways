import { useState } from 'react';

function Quantifier({ countableItem }) {
    const [count, setCount] = useState(0);

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

    return (
        <div className="quantifier">
            <div className="quantifier__concept">
                <p className="quantifier__category">{countableItem.category}</p>
                <p className="quantifier__description">{countableItem.description}</p>
            </div>
            <div className="quantifier__counter">
                <span className="quantifier__operator" onClick={handleDecrement}>-</span>
                <span className="quantifier__count">{count}</span>
                <span className="quantifier__operator" onClick={handleIncrement}>+</span>
            </div>
        </div>
    )
}

export default Quantifier;