import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

import { readFromStorage } from '../../../utilities/utils';

function NheDetail () {
    const [raceData, setRaceData] = useState(null)
    const location = useLocation();
    console.log(raceData);

    useEffect(() => {
        const storedData = readFromStorage('session-storage', 'nhes');
        const currentRaceData = storedData.find((el) => el.full_name.toLowerCase().replace(/\s/g, '-') === location.pathname.replace('/nhes/', ''));
        setRaceData(currentRaceData);
    }, [])

    return (
        <div></div>
    )
}

export default NheDetail;