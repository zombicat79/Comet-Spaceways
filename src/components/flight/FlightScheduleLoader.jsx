import { useState, useEffect, useContext } from 'react';
import { useNavigate, useLoaderData, useNavigation } from 'react-router';
import { LayoutContext } from '../../contexts/LayoutContext';
import useLayout from '../../hooks/useLayout';

import Tickets from '../../pages/purchase/Tickets';
import ErrorNotice from '../infopieces/ErrorNotice';

import supabase from '../../../db/supabase-client';

import errors from '../infopieces/errorTypes';

function FlightScheduleLoader() {
    const [dataError, setDataError] = useState(null);
    const { layoutState, handlePopupLaunch, dispatch } = useContext(LayoutContext);
    const flightSchedule = useLoaderData();
    const navigate = useNavigate();
    const navigation = useNavigation();

    useEffect(() => {
        if (window.location.pathname !== "/purchase/tickets/flight-data") {
            navigate('/purchase/tickets/flight-data');
        }
    }, []);

    useEffect(() => {
        if (flightSchedule) {
            if ("message" in flightSchedule && flightSchedule.message.includes("Error")) {
                handlePopupLaunch({ modalClass: "generic", content: <ErrorNotice error={errors.flightData} /> })
                setDataError(true);
            }
        }
    }, []);

    useEffect(() => {
        if (navigation.state === "loading") {
            dispatch({ type: 'toggle/scroll', payload: false })
            dispatch({ type: 'toggle/loader', payload: true })
        }
        if (navigation.state === "idle") {
            if (layoutState.scroll === false && layoutState.loader === true) {
                dispatch({ type: 'toggle/scroll', payload: false })
                dispatch({ type: 'toggle/loader', payload: true })
            }
        }
    }, [navigation.state])

    if (dataError) {
        return <Tickets />
    }
    
    return <Tickets flightSchedule={flightSchedule} />
}

export async function fetchFlights() {
    // FAVOUR THIS IMPLEMENTATION WHEN LOADING DATA FROM SUPABASE
    async function getDataFromDB() {
        const { data, error } = await supabase
        .from('Origins')
        .select()

        if (error) return error;

        return data;
    }

    const flights = await getDataFromDB();
    return flights;

    // FAVOUR THIS IMPLEMENTATION WHEN LOADING DATA FROM JSON-SERVER 
    /* return fetch("http://localhost:3000/origins")
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.log(err)); */
};
export default FlightScheduleLoader;