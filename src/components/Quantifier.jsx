import { useContext } from 'react';
import useCounter from '../hooks/useCounter';

import { FlightSearchContext } from '../contexts/FlightSearchContext';

function Quantifier({ countableItem }) {
    const { count, handleIncrement, handleDecrement } = useCounter();

    const hasContext = useContext(FlightSearchContext);
    
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