import { useContext } from 'react';
import { DestinationsContext } from '../../contexts/DestinationsContext';
import { useLocation } from 'react-router';

function DestinationDetail() {
    const { destinations } = useContext(DestinationsContext);
    const location = useLocation();
    const [currentDestination] = location.pathname.match(/(?<=\/)[A-Z]{3}$/);
    const currentDestinationData = destinations.find((el) => el.port === currentDestination);
    console.log(currentDestinationData)

    return (
        <p>{currentDestination}</p>
    )
}

export default DestinationDetail;