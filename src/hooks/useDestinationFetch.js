import { useState, useEffect, useContext } from 'react';
import { DestinationsContext } from '../contexts/DestinationsContext';
import { LayoutContext } from '../contexts/LayoutContext';

function useDestinationFetch() {
    const [loading, setLoading] = useState(false);
    const [fetchAlert, setFetchAlert] = useState(false);
    const { destinations } = useContext(DestinationsContext);
    const { dispatch } = useContext(LayoutContext);

    useEffect(() => {
        setLoading(true);
        dispatch({ type: "set/scroll", payload: false });
        dispatch({ type: "set/loader", payload: true });
        if (!destinations) {
            setTimeout(() => {
                dispatch({ type: "set/scroll", payload: true });
                dispatch({ type: "set/loader", payload: false });
                setFetchAlert(true);
            }, 5000);
        } else {
            dispatch({ type: "set/scroll", payload: true });
            dispatch({ type: "set/loader", payload: false });
        }
        setLoading(false);
    },[destinations])

    return { loading, fetchAlert, setFetchAlert, destinations };
}

export default useDestinationFetch;