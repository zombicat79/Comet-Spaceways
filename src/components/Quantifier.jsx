import { useContext, useEffect } from 'react';
import useCounter from '../hooks/useCounter';

import { FlightSearchContext } from '../contexts/FlightSearchContext';
import { LayoutContext } from '../contexts/LayoutContext';

function Quantifier({ countableItem }) {
    const hasContext = useContext(FlightSearchContext);
    const { layoutState } = useContext(LayoutContext);
    const { count, handleIncrement, handleDecrement } = useCounter(hasContext.flightSearchState.passengers[countableItem.category.toLowerCase()]);

    useEffect(() => {
        if (hasContext && hasContext.changeFlightSearchState) {
            const { changeFlightSearchState } = hasContext;
            changeFlightSearchState({ type: 'passenger-change', payload: {category: countableItem.category.toLowerCase(), amount: count} });
        }
    }, [count])
    
    return (
        <div className="quantifier">
            <div className="quantifier__concept">
                <p className="quantifier__category">{countableItem.category}</p>
                {layoutState.viewportWidth > 480 &&
                    <p className="quantifier__description">{countableItem.description}</p>
                }   
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