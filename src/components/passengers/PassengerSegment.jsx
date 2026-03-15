import { useContext } from 'react';
import { FlightSearchContext } from '../../contexts/FlightSearchContext';

import ContentSection from "../../layout/ContentSection";
import PassengerForm from './PassengerForm';
import SvgIcon from "../SvgIcon";

function PassengerSegment({ type, onFormAdd }) {
    const { flightSearchState } = useContext(FlightSearchContext);
    const occurrences = new Array(flightSearchState.passengers[type + "s"]).fill(true);

    return (
        <ContentSection>
            <div className="segment">
                <header className="segment__header">
                    <div className={`segment__type segment__type--${type}`}>
                        <SvgIcon design={type} color="#272643" />
                        <h3>{type.toUpperCase() + 'S'}</h3>
                    </div>
                </header>
                <main className="segment__body">
                    {occurrences.map((el, index) => {
                        return (
                            <section key={`${type}-form-${index+1}`} className="passenger-segment">
                                <h4 className="passenger-segment__occurrence">{index + 1}.</h4>
                                <PassengerForm type={type} occurrence={index + 1} onFormAdd={onFormAdd} />
                            </section>
                        )
                    })}
                </main>
            </div>
        </ContentSection>
    )
}

export default PassengerSegment;