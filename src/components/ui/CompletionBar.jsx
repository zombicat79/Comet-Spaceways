import { useEffect, useRef } from 'react';

function CompletionBar({ title, value, topReferenceValue }) {
    const bar = useRef();

    useEffect(() => {
        bar.current.style.width = `${(value / topReferenceValue) * 100}%`;
        if (value < topReferenceValue / 4) {
            bar.current.style.backgroundColor = '#FF4500';
            return;
        } else if (value < topReferenceValue / 2) {
            bar.current.style.backgroundColor = '#f59977';
            return;
        } else {
            bar.current.style.backgroundColor = '#32CD32';
        }
    }, [value, topReferenceValue])
    
    return (
        <>
            {title && <span className='piece__dataIdentifier'>{title}</span>}
            <div className='piece__dataItem piece__dataItem--bar bar' >
                <div ref={bar} className='piece__dataProgress bar__progress' />
            </div>
        </>
    )
}

export default CompletionBar;