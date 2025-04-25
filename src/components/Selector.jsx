import { useEffect, useContext } from 'react';
import useSelectorTool from '../hooks/useSelectorTool';
import useTextResize from '../hooks/useTextResize';

import { FlightSearchContext } from './../contexts/FlightSearchContext';

import Quantifier from './Quantifier';
import DatePicker from 'react-datepicker';

function Selector({ type, identifier, initialValue, choiceOptions, cssModifier }) {
    const { selectionValue, handleFolding, handleSelection } = useSelectorTool(initialValue, cssModifier);
    const { outputValueText, textSizeCorrection } = useTextResize(initialValue);
    
    const hasContext = useContext(FlightSearchContext);

    useEffect(() => {
        if (hasContext && hasContext.changeFlightSearchState) {
            const { changeFlightSearchState } = hasContext;

            switch(identifier) {
                case 'Voyage-Type':
                    changeFlightSearchState({ type: 'scope-change', payload: selectionValue });
                    break;
                case 'Origin':
                    changeFlightSearchState({ type: 'origin-change', payload: selectionValue });
                    break;
                case 'Destination':
                    changeFlightSearchState({ type: 'destination-change', payload: selectionValue });
                    break;
                case 'Departure-Date':
                    changeFlightSearchState({ type: 'departure-change', payload: selectionValue });
                    break;
                case 'Return-Date':
                    changeFlightSearchState({ type: 'return-change', payload: selectionValue });
                    break;
            }
        }
    }, [selectionValue])

    return (
        <div 
            id={identifier}
            className={cssModifier ? `selector selector--${cssModifier}` : `selector`} 
            onClick={(e) => handleFolding(e.target)}
        >
            <p className="selector__id">{identifier.replace('-', ' ')}</p>
            { type === 'date'
                ? <DatePicker
                    selected={initialValue}
                    onChange={(date) => handleSelection(date, identifier)}
                />
                : <p className={`selector__value selector__value--${textSizeCorrection}`}>
                    {cssModifier === 'disabled' 
                        ? "N/A"
                        : outputValueText
                    }
                </p>
            }

            {hasContext.flightSearchState.dropdownState.get(identifier) && type === 'regular' &&
                <div className="selector__choice">
                    {choiceOptions?.map((el, index) => {
                        if ((identifier === 'Destination' && el === hasContext.flightSearchState.origin) || (identifier === 'Origin' && el === hasContext.flightSearchState.destination)) {
                            return (
                                <span 
                                    key={el + index}
                                    id={el} 
                                    className="selector__option selector__option--disabled"
                                    onClick={(e) => handleSelection(e.target, identifier)} >
                                        {el}
                                </span>
                            )
                        } else {
                            return (
                                <span 
                                    key={el + index}
                                    id={el} 
                                    className="selector__option"
                                    onClick={(e) => handleSelection(e.target, identifier)} >
                                        {el}
                                </span>
                            )
                        }
                    })}
                </div>
            }

            {hasContext.flightSearchState.dropdownState.get(identifier) && type === 'quantity' &&
                <div className={`selector__choice selector__choice--${type}`}>
                    {choiceOptions?.map((el, index) => {
                        return (
                            <Quantifier 
                                key={el.category + index}
                                countableItem={el} 
                            />
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default Selector;