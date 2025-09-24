import { useContext } from 'react';
import { LayoutContext } from './../../contexts/LayoutContext';

import SvgIcon from "../SvgIcon";
import ConnectionDetails from '../infopieces/ConnectionDetails';
import RoutingDiagram from '../RoutingDiagram';

import { maximizeDestinations, displayDurationInfo } from '../../utilities/utils';

function FlightRouting({ routingDetails }) {
    const { layoutState, handlePopupLaunch } = useContext(LayoutContext);

    return (
        <div className="routing">
            <div className="routing__schema">
                <div className="routing__coords">
                    <span className="routing__date">{routingDetails.departure_date}</span>
                    {layoutState.viewportWidth > 360 && <span className="routing__time">{routingDetails.departure_time}</span>}
                    {layoutState.viewportWidth <= 768 && <span>|</span>}
                    {layoutState.viewportWidth <= 1000 && 
                    <span className="routing__port">
                        {routingDetails.origin}
                    </span>}
                    {layoutState.viewportWidth > 1000 && 
                    <span className="routing__port">
                        {maximizeDestinations(routingDetails.origin)}
                    </span>}
                </div>
                <div className="routing__figure">
                    <div className="routing__identifier">
                        <span className="routing__flight">{routingDetails.name}</span>
                        {routingDetails.operator !== "Comet Spaceways" && <span className="routing__operator">(operated by {routingDetails.operator})</span>}
                    </div>
                    <RoutingDiagram />
                    <span className="routing__duration">{displayDurationInfo(routingDetails.duration)}</span>
                </div>
                <div className="routing__coords">
                    <span className="routing__date">{routingDetails.arrival_date}</span>
                    {layoutState.viewportWidth > 360 && <span className="routing__time">{routingDetails.arrival_time}</span>}
                    {layoutState.viewportWidth <= 768 && <span>|</span>}
                    {layoutState.viewportWidth <= 1000 && 
                    <span className="routing__port">
                        {routingDetails.destination}
                    </span>}
                    {layoutState.viewportWidth > 1000 && 
                    <span className="routing__port">
                        {maximizeDestinations(routingDetails.destination)}
                    </span>}
                </div>
            </div>
            {routingDetails.mode === 'direct' && <span className="routing__mode">Direct</span>}
            {routingDetails.mode === 'stopover' && 
            <span 
                className="routing__mode routing__mode--underline" 
                onClick={() => handlePopupLaunch({ modalClass: 'connection-info', content: <ConnectionDetails routingDetails={routingDetails} /> })}
            >
            1 stopover
            </span>
            }
        </div>
    )
}

export default FlightRouting;