import { useEffect, useRef } from 'react';

function CompletionBar({ title, value, referenceValue }) {
    const bar = useRef();

    useEffect(() => {
        if (title == 'health') {
            bar.current.style.width = `${(value / referenceValue) * 100}%`;
        } else {
            const widthCalculation = (value / referenceValue) / 1.5 * 100;
            bar.current.style.width = `${widthCalculation < 100 ? widthCalculation : 100}%`;
        }
        
        if (value < referenceValue / 4) {
            bar.current.style.backgroundColor = '#FF4500';
            return;
        } else if (value < referenceValue / 2) {
            bar.current.style.backgroundColor = '#f59977';
            return;
        } else {
            bar.current.style.backgroundColor = '#32CD32';
        }
    }, [title, value, referenceValue])
    
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