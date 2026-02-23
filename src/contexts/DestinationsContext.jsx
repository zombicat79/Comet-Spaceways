import { useState, useEffect, createContext } from "react";
import supabase from "../../db/supabase-client";

const DestinationsContext = createContext();

function DestinationsProvider({ children }) {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        async function fetchDestinations() {
            async function getDataFromDB() {
                const { data, error } = await supabase
                .from('Destinations')
                .select()
        
                if (error) return { error };
        
                return { data };
            }
        
            const destinationData = await getDataFromDB();

            if (destinationData["error"]) {
                setDestinations(null);
            } else {
                const sortedData = destinationData.data.sort((a, b) => {
                    if (a.id > b.id) return 1;
                    if (a.id < b.id) return -1;
                    return 0;
                })
                setDestinations(sortedData);
            }
        };

        fetchDestinations();
    }, [])

    return ( 
        <DestinationsContext.Provider value={{ destinations }}>
            {children}
        </DestinationsContext.Provider>
    )
}

export { DestinationsContext, DestinationsProvider };