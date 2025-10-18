import { useEffect } from 'react';
import { useNavigate, useLoaderData } from 'react-router';
import Tickets from '../../pages/purchase/Tickets';

import supabase from '../../../db/supabase-client';

function FlightScheduleLoader() {
    const flightSchedule = useLoaderData();
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/purchase/tickets/flight-data');
    }, [])
    
    return <Tickets flightSchedule={flightSchedule} />
}

export async function fetchFlights() {
    // FAVOUR THIS IMPLEMENTATION WHEN LOADING DATA FROM SUPABASE
    async function getDataFromDB() {
        const { data, error } = await supabase
        .from('Origins')
        .select()

        if (error) {
            console.log(error);
            return;
        }

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