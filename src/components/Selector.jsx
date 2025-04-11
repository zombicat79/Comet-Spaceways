import { useEffect, useContext } from 'react';
import useSelectorTool from '../hooks/useSelectorTool';
import useTextResize from '../hooks/useTextResize';

import { FlightSearchContext } from './../contexts/FlightSearchContext';

import Quantifier from './Quantifier';
import DatePicker from 'react-datepicker';

function Selector({ type, identifier, initialValue, choiceOptions, cssModifier }) {
    const { isFolded, selectionValue, handleFolding, handleSelection } = useSelectorTool(initialValue, cssModifier);
    const { outputValueText, textSizeCorrection } = useTextResize(initialValue);
    
    const hasContext = useContext(FlightSearchContext);

    useEffect(() => {
        if (hasContext && hasContext.changeFlightSearchState) {
            const { changeFlightSearchState } = hasContext;

            switch(identifier) {
                case 'Voyage Type':
                    changeFlightSearchState({ type: 'scope-change', payload: selectionValue });
                    break;
                case 'Origin':
                    changeFlightSearchState({ type: 'origin-change', payload: selectionValue });
                    break;
                case 'Destination':
                    changeFlightSearchState({ type: 'destination-change', payload: selectionValue });
                    break;
                case 'Departure Date':
                    changeFlightSearchState({ type: 'departure-change', payload: selectionValue });
                    break;
                case 'Return Date':
                    changeFlightSearchState({ type: 'return-change', payload: selectionValue });
                    break;
            }
        }
    }, [selectionValue])

    return (
        <div 
            className={cssModifier ? `selector selector--${cssModifier}` : `selector`} 
            onClick={(e) => handleFolding(e.target)}
        >
            <p className="selector__id">{identifier}</p>
            { type === 'date'
                ? <DatePicker
                    selected={initialValue}
                    onChange={(date) => handleSelection(date)}
                />
                : <p className={`selector__value selector__value--${textSizeCorrection}`}>
                    {cssModifier === 'disabled' 
                        ? "N/A"
                        : outputValueText
                    }
                </p>
            }

            {!isFolded && type === 'regular' &&
                <div className="selector__choice">
                    {choiceOptions?.map((el, index) => {
                        return (
                            <span 
                                key={el + index}
                                id={el} 
                                className="selector__option"
                                onClick={(e) => handleSelection(e.target)} >
                                    {el}
                            </span>
                        )
                    })}
                </div>
            }

            {!isFolded && type === 'quantity' &&
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