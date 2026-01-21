import { useState, useEffect, useContext, useRef } from 'react';
import { LayoutContext } from '../../contexts/LayoutContext';
import { DestinationsContext } from '../../contexts/DestinationsContext';

import StellarMap from '../../components/StellarMap';
import SearchTool from '../../components/SearchTool';
import Card from './../../components/Card';
import PriceTag from '../../components/PriceTag';
import FlightSearch from './../../components/flight/FlightSearch';

import { filterSearch } from '../../utilities/utils';

function DestinationsIndex() {
    const [filteredDestinations, setFilteredDestinations] = useState([]);
    const { layoutState } = useContext(LayoutContext);
    const { destinations } = useContext(DestinationsContext);
    const destinationList = useRef(null);
    console.log(filteredDestinations)

    const handleFilter = (query, dataSection) => {
        const filterResult = filterSearch(query, destinations, dataSection || null);
        setFilteredDestinations(filterResult);
    }

    const handleFilterReset = () => setFilteredDestinations([]);

    useEffect(() => {
        destinationList.current.scrollIntoView({ block: "center", behavior: "smooth" });
    }, [filteredDestinations])

    if (destinations.length > 0) {
        return (
            <main className="destinations">
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
                    ? <StellarMap onFilter={handleFilter} onFilterReset={handleFilterReset} />
                    : <SearchTool onFilter={handleFilter} />
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
                                            price="45" 
                                            priceType="initial"
                                            currency="au"
                                        />
                                    </div>
                                </Card>
                            )
                        }

                        return null;
                    })}
                </div>
                <div className="destinations__search">
                    <h3>WHERE DO YOU FANCY GOING?</h3>
                    <FlightSearch />
                </div>
            </main>
        )
    }

    return (
        <main className="destinations">
            This is the destinations page
        </main>
    )
}

export default DestinationsIndex;