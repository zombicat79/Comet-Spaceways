import { useState, useEffect, useContext } from 'react';

import { FlightSearchContext } from './../contexts/FlightSearchContext';

import Quantifier from './Quantifier';

function Selector({ type, identifier, initialValue, choiceOptions, tooling, cssModifier }) {
    const { flightSearchState, changeFlightSearchState } = useContext(FlightSearchContext);
    console.log(flightSearchState)

    const [isFolded, setIsFolded] = useState(true);
    const [selectionValue, setSelectionValue] = useState(initialValue);

    let outputValueText = selectionValue;
    let textSizeCorrection;

    switch(true) {
        case selectionValue.length > 15:
            textSizeCorrection = 'small';
            outputValueText = handleTextOversize();
            break;
        case selectionValue.length >= 14 && selectionValue.length <= 15:
            textSizeCorrection = 'small';
            break;
        case selectionValue.length > 11 && selectionValue.length < 14:
            textSizeCorrection = 'medium';
            break;
        case selectionValue.length <= 11:
            textSizeCorrection = 'regular';
            break; 
    }

    function handleTextOversize() {
        return selectionValue.slice(0, 12) + '...'; 
    }

    function handleFolding(clickedElement) {
        if (clickedElement.classList.contains('quantifier__operator')) return;
        if (cssModifier !== 'disabled') {
            setIsFolded((curr) => !curr);
        }
    }

    function handleSelection(newSelection) {
        switch(true) {
            case newSelection.innerText.toLowerCase() === 'round trip':
                setSelectionValue(`🔄 ${newSelection.innerText}`);
                break;
            case newSelection.innerText.toLowerCase() === 'one-way':
                setSelectionValue(`🔄 ${newSelection.innerText}`);
                break;
            default:
                setSelectionValue(newSelection.innerText);
        }

        /* if (tooling) {
            tooling(newSelection.id);
        } */
    }

    useEffect(() => {
        if (changeFlightSearchState) {
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
            }
        }
    }, [selectionValue])

    return (
        <div 
            className={cssModifier ? `selector selector--${cssModifier}` : `selector`} 
            onClick={(e) => handleFolding(e.target)}
        >
            <p className="selector__id">{identifier}</p>
            <p className={`selector__value selector__value--${textSizeCorrection}`}>
                {cssModifier === 'disabled' 
                    ? "N/A"
                    : outputValueText
                }
            </p>

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