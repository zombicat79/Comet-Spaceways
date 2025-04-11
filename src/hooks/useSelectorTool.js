import { useState } from 'react';

function useSelectorTool(initialValue = '', cssModifier = '') {
    const [isFolded, setIsFolded] = useState(true);
    const [selectionValue, setSelectionValue] = useState(initialValue);

    function handleFolding(clickedElement) {
        if (clickedElement.classList.contains('quantifier__operator')) return;
        if (clickedElement.closest('.react-datepicker__tab-loop')) return;
        if (cssModifier !== 'disabled') {
            setIsFolded((curr) => !curr);
        }
    }

    function handleSelection(newSelection) {
        console.log(newSelection)
        switch(true) {
            case newSelection.toString().includes('GMT'):
                console.log('hello')
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

    return ({ isFolded, selectionValue, handleFolding, handleSelection });
}

export default useSelectorTool;