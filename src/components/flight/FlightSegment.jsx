import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { FlightSearchContext } from '../../contexts/FlightSearchContext';

import ContentSection from "../../layout/ContentSection";
import ItemList from '../ItemList';
import FlightDetails from './FlightDetails';
import SvgIcon from "../SvgIcon";
import Button from '../Button';

function FlightSegment({ type, flightData }) {
    const { flightSearchState } = useContext(FlightSearchContext);
    const navigate = useNavigate();
    const segmentedFlightData = flightData?.map((el) => {
        return { ...el, type };
    })

    return (
        <ContentSection>
            <div className="segment">
                <header className="segment__header">
                    <div className={`segment__type segment__type--${type}`}>
                        <SvgIcon design="starship" color="#272643" />
                        <p>{type.toUpperCase()}</p>
                    </div>
                    <p className="segment__route">
                        {type === 'outbound' 
                        ? flightSearchState.origin.toUpperCase() + ' \u{02192} ' + flightSearchState.destination.toUpperCase()
                        : flightSearchState.destination.toUpperCase() + ' \u{02192} ' + flightSearchState.origin.toUpperCase()
                        }
                    </p>
                </header>
                <main className="segment__body">
                    {flightData
                    ? <ItemList data={segmentedFlightData} ItemComponent={FlightDetails} separation={3}  />
                    : <div className="segment__unavailable">
                        <p>No flights available on this route / date❗️</p>
                        <Button text={'New search'} action={() => navigate("/")} />
                    </div>
                    }
                </main>
            </div>
        </ContentSection>
    )
}

export default FlightSegment;