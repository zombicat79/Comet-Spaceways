import { useEffect, useContext } from 'react';
import { DestinationsContext } from '../../contexts/DestinationsContext';
import { FlightSearchContext } from '../../contexts/FlightSearchContext';
import { useLocation } from 'react-router';

import TagList from "./../../components/TagList";
import Banner from './../../components/Banner';
import ContentSection from './../../layout/ContentSection';
import Figure from "../../components/Figure";
import FlightSearch from '../../components/flight/FlightSearch';

import { maximizeDestinations } from '../../utilities/utils';

function DestinationDetail() {
    const { destinations } = useContext(DestinationsContext);
    const { flightSearchState, changeFlightSearchState } = useContext(FlightSearchContext);
    const location = useLocation();
    const [currentDestination] = location.pathname.match(/(?<=\/)[A-Z]{3}$/);
    const currentDestinationData = destinations.find((el) => el.port === currentDestination);
    console.log(currentDestinationData)

    useEffect(() => {
        if (flightSearchState.origin === maximizeDestinations(currentDestination)) {
            changeFlightSearchState({ type: 'origin-change', payload: "--" });
        }
        changeFlightSearchState({ type: 'destination-change', payload: maximizeDestinations(currentDestination) });
    }, [])

    if (destinations.length > 0) {
        const { domains, region, host_type, category } = currentDestinationData;
        const tags = domains.concat([region]).concat([host_type]).concat([category]);

        return (
            <main className="destination-detail">
                <Banner 
                    textStyle={{ color: 'default', align: 'left' }}
                    textContent={{
                        heading: `${currentDestinationData.full_name} - (${currentDestinationData.port})`,
                        body: `${currentDestinationData.alias} ${currentDestinationData.category}`
                    }}
                    background={{ img: currentDestinationData.port, height: 'full' }}
                />
                <section className="destination-tags">
                    <TagList listMembers={tags} />
                </section>
                <ContentSection>
                    <h2>{currentDestinationData.intro}</h2>
                    <p>{currentDestinationData.description}</p>
                    <ul className="features__list">
                        {currentDestinationData.features.map((el, index) => {
                            return (
                                <li key={el+index[2]} className="features__element">
                                    <Figure
                                        layout={index % 2 === 0 ? "horizontal" : "horizontal-reverse"}
                                        imgPath={`./../assets/images/destinations/${currentDestinationData.port}/`}
                                        img={currentDestinationData.feature_pictures[index]} 
                                        text={el}
                                        align={index % 2 === 0 ? "left" : "right"}
                                    />
                                </li>
                            )
                        })}
                    </ul>
                    <h3>{currentDestinationData.promotional_catch}</h3>
                </ContentSection>
                <section className="destination-search">
                    <h3>READY TO GO?</h3>
                    <FlightSearch fixedDestination={true} />
                </section>
                
            </main>
        )
    }

    return null;
}

export default DestinationDetail;