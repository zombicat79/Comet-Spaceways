import { useContext } from 'react';
import { LayoutContext } from './../../contexts/LayoutContext';

import SvgIcon from "../SvgIcon";
import ConnectionDetails from '../infopieces/ConnectionDetails';

import { minimizeDestinations } from '../../utilities/utils';

function FlightRouting({ routingDetails }) {
    const { layoutState, handlePopupLaunch } = useContext(LayoutContext);

    return (
        <div className="routing">
            <div className="routing__schema">
                <div className="routing__coords">
                    <span className="routing__date">23/08/2125</span>
                    {layoutState.viewportWidth > 360 && <span className="routing__time">08:35h</span>}
                    {layoutState.viewportWidth <= 768 && <span>|</span>}
                    {layoutState.viewportWidth <= 1000 && <span className="routing__port">{minimizeDestinations('Earth (Europe)')}</span>}
                    {layoutState.viewportWidth > 1000 && <span className="routing__port">Earth (Europe)</span>}
                </div>
                <div className="routing__figure">
                    <span className="routing__flight">CS4552</span>
                    <div className="routing__diagram">
                        <hr className="routing__line"></hr>
                        <div className="routing__endpoint routing__endpoint--left"></div>
                        <div className="routing__arrow">
                            <SvgIcon design="starship" color="#0B3D91" />
                        </div>
                        <div className="routing__endpoint routing__endpoint--right"></div>
                    </div>
                    <span className="routing__duration">1 month</span>
                </div>
                <div className="routing__coords">
                    <span className="routing__date">23/09/2125</span>
                    {layoutState.viewportWidth > 360 && <span className="routing__time">14:56h</span>}
                    {layoutState.viewportWidth <= 768 && <span>|</span>}
                    {layoutState.viewportWidth <= 1000 && <span className="routing__port">{minimizeDestinations('Mars')}</span>}
                    {layoutState.viewportWidth > 1000 && <span className="routing__port">Mars</span>}
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