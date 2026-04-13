import { useEffect, useContext } from 'react';
import { FlightSearchContext } from '../../../contexts/FlightSearchContext';
import { LayoutContext } from '../../../contexts/LayoutContext';
import { useLocation } from 'react-router';

import useDestinationFetch from '../../../hooks/useDestinationFetch';

import TagList from "./../../../components/TagList";
import Banner from './../../../components/Banner';
import ContentSection from './../../../layout/ContentSection';
import Figure from "../../../components/Figure";
import SliderTool from '../../../components/SliderTool';
import FlightSearch from '../../../components/flight/FlightSearch';

import { maximizeDestinations } from '../../../utilities/utils';
import errors from '../../../components/modalpieces/errorTypes';

function DestinationDetail() {
    const { loading, fetchAlert, setFetchAlert, destinations } = useDestinationFetch();
    const { flightSearchState, changeFlightSearchState } = useContext(FlightSearchContext);
    const { layoutState, dispatch, handlePopupLaunch } = useContext(LayoutContext);
    const location = useLocation();
    const [currentDestination] = location.pathname.match(/(?<=\/)[A-Z]{3}$/);
    const currentDestinationData = destinations?.find((el) => el.port === currentDestination) || null;

    useEffect(() => {
        if (fetchAlert) handlePopupLaunch({ 
            modalClass: 'generic', 
            content: 'error-notice',
            props: { error: errors.destinationData } 
        })
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
        if (flightSearchState.origin === maximizeDestinations(currentDestination)) {
            changeFlightSearchState({ type: 'origin-change', payload: "--" });
        }
        changeFlightSearchState({ type: 'destination-change', payload: maximizeDestinations(currentDestination) });
    }, [])

    if (currentDestinationData && !loading) {
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
        <main className="destinations">
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