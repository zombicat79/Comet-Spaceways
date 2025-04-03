import { useState } from 'react';

function Selector({ type, identifier, initialValue, choiceOptions, tooling, cssModifier }) {
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
                setSelectionValue(`➡️ ${newSelection.innerText}`);
                break;
            default:
                setSelectionValue(newSelection.innerText);
        }

        if (tooling) {
            tooling(newSelection.id);
        }
    }

    return (
        <div 
            className={cssModifier ? `selector selector--${cssModifier}` : `selector`} 
            onClick={handleFolding}
        >
            <p className="selector__id">{identifier}</p>
            <p className={`selector__value selector__value--${textSizeCorrection}`}>
                {cssModifier === 'disabled' 
                    ? "N/A"
                    : outputValueText
                }
            </p>

            {!isFolded &&
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
        </div>
    )
}

export default Selector;