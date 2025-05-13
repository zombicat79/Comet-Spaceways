function useTextResize(text) {
    let outputValueText = text;
    let textSizeCorrection;

    switch(true) {
        case text.length >= 15:
            textSizeCorrection = 'small';
            outputValueText = handleTextOversize();
            break;
        case text.length >= 14 && text.length < 15:
            textSizeCorrection = 'small';
            break;
        case text.length > 11 && text.length < 14:
            textSizeCorrection = 'medium';
            break;
        default:
            textSizeCorrection = 'regular';
    }

    function handleTextOversize() {
        return text.slice(0, 12) + '...'; 
    }

    return ({ outputValueText, textSizeCorrection });
}

export default useTextResize;