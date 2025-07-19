import { useState, useEffect } from 'react';

function useHeader(layoutState) {
    const [transparency, setTransparency] = useState(true);
    const [expansion, setExpansion] = useState(false);

    function handleResizing() {
        if (transparency) {
            setTransparency((current) => !current);
            setExpansion((current) => !current);
        }
        if (!transparency) setExpansion((current) => !current);
    }

    useEffect(() => {
        if (layoutState.scrollHeight === 0 && !expansion) {
            setTransparency(true);
            return;
        }

        if (layoutState.scrollHeight > 30) {
            setTransparency(false);
            return;
        }
    }, [layoutState.scrollHeight, expansion])

    return { 
        transparency, 
        setTransparency, 
        expansion, 
        setExpansion, 
        handleResizing 
    };
}

export default useHeader;