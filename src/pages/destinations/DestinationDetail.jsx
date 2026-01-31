import { useState, useEffect, useContext } from 'react';
import { DestinationsContext } from '../../contexts/DestinationsContext';
import { FlightSearchContext } from '../../contexts/FlightSearchContext';
import { LayoutContext } from '../../contexts/LayoutContext';
import { useLocation } from 'react-router';

import TagList from "./../../components/TagList";
import Banner from './../../components/Banner';
import ContentSection from './../../layout/ContentSection';
import Figure from "../../components/Figure";
import SliderTool from '../../components/SliderTool';
import FlightSearch from '../../components/flight/FlightSearch';

import { maximizeDestinations } from '../../utilities/utils';

function DestinationDetail() {
    const [loading, setLoading] = useState(false);
    const { destinations } = useContext(DestinationsContext);
    const { flightSearchState, changeFlightSearchState } = useContext(FlightSearchContext);
    const { dispatch, layoutState } = useContext(LayoutContext);
    const location = useLocation();
    const [currentDestination] = location.pathname.match(/(?<=\/)[A-Z]{3}$/);
    const currentDestinationData = destinations.find((el) => el.port === currentDestination);

    useEffect(() => {
        if (destinations.length <= 0) {
            dispatch({ type: "set/scroll", payload: false });
            dispatch({ type: "set/loader", payload: true });
            setLoading(true);
        } else {
            dispatch({ type: "set/scroll", payload: true });
            dispatch({ type: "set/loader", payload: false });
            setLoading(false);
        }
    },[destinations])

    useEffect(() => {
        if (flightSearchState.origin === maximizeDestinations(currentDestination)) {
            changeFlightSearchState({ type: 'origin-change', payload: "--" });
        }
        changeFlightSearchState({ type: 'destination-change', payload: maximizeDestinations(currentDestination) });
    }, [])

    if (!loading && currentDestinationData) {
        const { domains, region, host_type, category, uses } = currentDestinationData;
        const tags = domains.concat([region]).concat([host_type]).concat([category].concat(uses));
        const sliderPics = currentDestinationData.pictures.map((el, index) => {
            return { 
                id: index+1, 
                imgPath: `./../assets/images/destinations/${currentDestinationData.port}/`, 
                img: el, 
                alt: ""
            }
        })
        const sliderCapacity = layoutState.viewportWidth >= 768 ? 3 : layoutState.viewportWidth >= 480 ? 2 : 1;

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
                <SliderTool 
                    contentType="link-img"
                    content={sliderPics}
                    settings={{
                        autoplay: true,
                        arrows: false,
                        dots: true,
                        infinite: true,
                        speed: 5000,
                        slidesToShow: sliderCapacity,
                        slidesToScroll: 1,
                        centerMode: false
                    }}
                />
                <section className="destination-search">
                    <h3>READY TO GO?</h3>
                    <FlightSearch fixedDestination={true} />
                </section>
                
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

export default DestinationDetail;