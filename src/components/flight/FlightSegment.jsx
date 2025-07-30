import { useContext } from 'react';
import { FlightSearchContext } from '../../contexts/FlightSearchContext';

import ContentSection from "../../layout/ContentSection";
import ItemList from '../ItemList';
import FlightDetails from './FlightDetails';
import SvgIcon from "../SvgIcon";

function FlightSegment({ type }) {
    const { flightSearchState } = useContext(FlightSearchContext);

    return (
        <ContentSection>
            <div className="segment">
                <header className="segment__header">
                    <div className={`segment__type segment__type--${type}`}>
                        <SvgIcon design="starship" />
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
                    <ItemList data={[{id: 1, mode: 'direct'}, {id: 2, mode: 'stopover'}]} ItemComponent={FlightDetails} separation={3}  />
                </main>
            </div>
        </ContentSection>
    )
}

export default FlightSegment;