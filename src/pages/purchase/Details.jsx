import { useEffect, useContext } from 'react';
import { LayoutContext } from '../../contexts/LayoutContext';

import WorkInProgress from '../../components/infopieces/WorkInProgress';

function PassengerDetails() {
    const { handlePopupLaunch } = useContext(LayoutContext);

    useEffect(() => {
        handlePopupLaunch({ modalClass: "generic", content: <WorkInProgress /> });
    }, []);

    return (
        <div className="details"></div>
    )
}

export default PassengerDetails;