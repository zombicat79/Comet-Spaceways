import { useState, useEffect, useContext, useRef } from 'react';
import { useLocation } from 'react-router';
import { LayoutContext } from '../../contexts/LayoutContext';

import useDestinationFetch from '../../hooks/useDestinationFetch';

import Tooltip from "../../components/Tooltip";
import InfoPanel from '../../components/InfoPanel';
import Banner from "../../components/Banner";
import StellarMap from '../../components/StellarMap';
import SearchTool from '../../components/SearchTool';
import Card from './../../components/Card';
import PriceTag from '../../components/PriceTag';
import FlightSearch from './../../components/flight/FlightSearch';
import ErrorNotice from '../../components/infopieces/ErrorNotice';

import { filterSearch } from '../../utilities/utils';
import errors from '../../components/infopieces/errorTypes';

function DestinationsIndex() {
    const { loading, fetchAlert, setFetchAlert, destinations } = useDestinationFetch();
    const [filteredDestinations, setFilteredDestinations] = useState([]);
    const [tooltip, setTooltip] = useState({ active: false, text: "", color: "" });
    const { layoutState, dispatch, handlePopupLaunch } = useContext(LayoutContext);
    const location = useLocation();
    const destinationList = useRef(null);

    const handleFilter = (query, dataSection) => {
        const filterResult = filterSearch(query, destinations, dataSection || null);
        setFilteredDestinations(filterResult);
    }

    const handleFilterReset = () => setFilteredDestinations([]);

    const handleTooltip = (action, payload) => {
        action === "show" ? setTooltip({ active: true, text: payload.text, color: payload.color}) : setTooltip({ active: false, text: "", color: "" });
    }

    useEffect(() => {
        if (fetchAlert) handlePopupLaunch({ modalClass: "generic", content: <ErrorNotice error={errors.destinationData} /> })
    }, [fetchAlert])

    useEffect(() => {
        if (layoutState.modal && fetchAlert) {
            dispatch({ type: "set/clickable", payload: false });
            setTimeout(() => {
                setFetchAlert(false);
            }, 6000);
        } else {
            dispatch({ type: "set/clickable", payload: true });
        }
    }, [layoutState.modal, fetchAlert])

    useEffect(() => {
        if (destinationList.current) {
            destinationList.current.scrollIntoView({ block: "center", behavior: "smooth" });
        }
    }, [filteredDestinations])

    useEffect(() => {
        if (location.search) {
            const query = location.search.replace('?query=', '').replace(/%20/g, ' ');
            handleFilter(query)
        }
    }, [location.search])

    if (destinations && !loading) {
        return (
            <main className="destinations">
                {layoutState.viewportWidth >= 1000 && tooltip.active && <Tooltip title={tooltip.text.toUpperCase()} color={tooltip.color} />}
                {layoutState.viewportWidth >= 1000 
                    ?<div className="destinations__heading">
                        <h2>OUR DESTINATIONS WITHIN THE SOLAR SYSTEM</h2>
                        <p>Click objects on the stellar map to filter down</p>
                        <p>Click on the Sun ☀️ to remove filters</p>
                    </div>
                    :<div className="destinations__heading">
                        <h2>OUR DESTINATIONS WITHIN THE SOLAR SYSTEM</h2>
                    </div>
                }
                {layoutState.viewportWidth >= 1000 
                    ? <StellarMap onFilter={handleFilter} onFilterReset={handleFilterReset} onTooltip={handleTooltip} />
                    : <SearchTool id='destination' onFilter={handleFilter} />
                }
                <div className="destinations__list" ref={destinationList}>
                    {destinations.map((el) => {
                        if (filteredDestinations.length === 0 || filteredDestinations.includes(el.id)) {
                            return (
                                <Card key={el.id} bgImg={el.cover_img} link={el.port}>
                                    <div className="card__heading">
                                        <h4 className="card__title">{el.full_name}</h4>
                                        <h5 className="card__subtitle">{el.alias} - ({el.port})</h5>
                                    </div>
                                    <div className="card__body">
                                        <p>{el.intro}</p>
                                        <PriceTag 
                                            price={el.lowest_accessibility} 
                                            priceType="initial"
                                            currency="au"
                                        />
                                    </div>
                                </Card>
                            )
                        }

                        return null;
                    })}

                    {filteredDestinations.length > 0 && filteredDestinations[0] === null && 
                        <InfoPanel type="alert">
                            <p>Ooops, we couldn't find a single thing in the Universe matching your search...</p>
                        </InfoPanel>
                    }
                </div>
                <div className="destinations__search">
                    <h3>WHERE DO YOU FANCY GOING?</h3>
                    <FlightSearch />
                </div>
            </main>
        )
    }

    return (
        <main className="destinations destinations--loading">
            <Banner
                textStyle={{ color: 'default', align: 'center' }}
                textContent={{
                    heading: 'Fetching destinations...',
                }}
                background={{ img: 'milky', height: 'full' }}
            />
        </main>
    )
}

export default DestinationsIndex;