import { useContext } from 'react';
import { FlightSearchContext } from '../../contexts/FlightSearchContext';

import ContentSection from "../../layout/ContentSection";
import Form from './../Form';
import SvgIcon from "../SvgIcon";

function PassengerSegment({ type }) {
    const { flightSearchState } = useContext(FlightSearchContext);
    const occurrences = new Array(flightSearchState.passengers[type + "s"]).fill(true);

    return (
        <ContentSection>
            <div className="segment">
                <header className="segment__header">
                    <div className={`segment__type segment__type--${type}`}>
                        <SvgIcon design={type} color="#272643" />
                        <p>{type.toUpperCase()}</p>
                    </div>
                </header>
                <main className="segment__body">
                    {occurrences.map((el, index) => {
                        return <Form key={"form-" + index} />
                    })}
                </main>
            </div>
        </ContentSection>
    )
}

export default PassengerSegment;