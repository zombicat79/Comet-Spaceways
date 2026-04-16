import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

import Diptych from '../../../components/diptychs/Diptych';

import { readFromStorage } from '../../../utilities/utils';

function NheDetail () {
    const [raceData, setRaceData] = useState(null)
    const location = useLocation();

    useEffect(() => {
        const storedData = readFromStorage('session-storage', 'nhes');
        const currentRaceData = storedData.find((el) => el.full_name.toLowerCase().replace(/\s/g, '-') === location.pathname.replace('/nhes/', ''));
        setRaceData(currentRaceData);
    }, [])

    return (
        <main className="nhes">
            {raceData && <Diptych 
                alignment="horizontal"
                theme="nhes" 
                img={raceData.cover_img}
                title={raceData.full_name}
                mainContent={raceData.description}
                bulletLists={[raceData.physical_features, raceData.intellectual_features, raceData.social_features]}
                specifics={{
                    nicknames: raceData.nicknames,
                    physical_features: raceData.physical_features,
                    intellectual_features: raceData.intellectual_features,
                    social_features: raceData.social_features,
                    permission_type: raceData.permission_type,
                    consulates: raceData.consulates
                }} 
            />}
        </main>
    )
}

export default NheDetail;