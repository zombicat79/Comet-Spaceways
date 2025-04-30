import { useState, useContext } from 'react';

import { FlightSearchContext } from '../contexts/FlightSearchContext';

function useSelectorTool(initialValue = '', cssModifier = '') {
    const [selectionValue, setSelectionValue] = useState(initialValue);
    const { flightSearchState, changeFlightSearchState } = useContext(FlightSearchContext)

    function handleFolding(clickedElement) {
        if (clickedElement.classList.contains('quantifier__operator')) return;
        if (clickedElement.closest('.react-datepicker__tab-loop')) return;
        if (cssModifier !== 'disabled') {
            changeFlightSearchState({ type: 'dropdown-change', payload: clickedElement.closest('.selector').id })
        }
    }

    function handleSelection(newSelection, selector) {
        switch(true) {
            case newSelection.toString().includes('GMT'):
                if (selector === 'Return-Date' && (newSelection < flightSearchState.departureDate)) return;
                setSelectionValue(new Date(newSelection));
                break;
            case newSelection.innerText.toLowerCase() === 'round trip':
                setSelectionValue(`🔄 ${newSelection.innerText}`);
                break;
            case newSelection.innerText.toLowerCase() === 'one-way':
                setSelectionValue(`➡️ ${newSelection.innerText}`);
                break;
            default:
                setSelectionValue(newSelection.innerText);
        }
    }

    return ({ selectionValue, handleFolding, handleSelection });
}

export default useSelectorTool;