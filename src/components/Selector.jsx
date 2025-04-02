import { useState } from 'react';

function Selector({ type, identifier, initialValue, choiceOptions }) {
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

    function handleFolding() {
        setIsFolded((curr) => !curr);
    }

    function handleSelection(newSelection) {
        setSelectionValue(newSelection);
    }

    return (
        <div className="selector" onClick={handleFolding}>
            <p className="selector__id">{identifier}</p>
            <p className={`selector__value selector__value--${textSizeCorrection}`}>
                {outputValueText}
            </p>

            {!isFolded &&
                <div className="selector__choice">
                    {choiceOptions?.map((el, index) => {
                        return (
                            <span 
                                key={el + index} 
                                className="selector__option"
                                onClick={(e) => handleSelection(e.target.innerText)} >
                                    {el}
                            </span>
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default Selector;