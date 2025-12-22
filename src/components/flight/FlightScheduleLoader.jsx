import { useEffect, useContext } from 'react';
import { useNavigate, useLoaderData, useNavigation } from 'react-router';
import { LayoutContext } from '../../contexts/LayoutContext';

import Tickets from '../../pages/purchase/Tickets';
import Banner from '../Banner';
import ErrorNotice from '../infopieces/ErrorNotice';

import supabase from '../../../db/supabase-client';

import errors from '../infopieces/errorTypes';

function FlightScheduleLoader() {
    const { handlePopupLaunch, dispatch } = useContext(LayoutContext);
    const dataFromDB = useLoaderData();
    const navigate = useNavigate();
    const navigation = useNavigation();

    useEffect(() => {
        if (!dataFromDB && window.location.pathname !== "/purchase/tickets/flight-data") {
            navigate('/purchase/tickets/flight-data');
        }
    }, [dataFromDB, window.location.pathname]);

    useEffect(() => {
        if (navigation.state === "loading") {
            dispatch({ type: 'set/loader', payload: true })
            dispatch({ type: 'set/scroll', payload: false })
        } 
        if (navigation.state === "idle" && dataFromDB)  {
            dispatch({ type: 'set/loader', payload: false })
            dispatch({ type: 'set/scroll', payload: true })
        }
    }, [navigation.state, dataFromDB])

    useEffect(() => {
        if (dataFromDB?.error) {
            if ("message" in dataFromDB.error && dataFromDB.error.message.includes("Error")) {
                handlePopupLaunch({ modalClass: "generic", content: <ErrorNotice error={errors.flightData} /> })
            }
        }
    }, [dataFromDB]);

    if (!dataFromDB) {
        return (
            <main className="tickets">
                <Banner
                    textStyle={{ color: 'default', align: 'center' }}
                    textContent={{
                        heading: 'Fetching your flights...',
                    }}
                    background={{ img: 'starscape', height: 'full' }}
                />
            </main>
        )
    }
    
    return <Tickets flightSchedule={dataFromDB} />
}

export async function fetchFlights() {
    // FAVOUR THIS IMPLEMENTATION WHEN LOADING DATA FROM SUPABASE
    async function getDataFromDB() {
        const { data, error } = await supabase
        .from('Origins')
        .select()

        if (error) return { error };

        return { data };
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