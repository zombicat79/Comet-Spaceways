import { useState, useEffect, useCallback } from 'react';
import { useLoaderData, useNavigate, useLocation } from 'react-router';

import ContentSection from './../../../layout/ContentSection';
import SliderTool from '../../../components/SliderTool';
import PromoPoster from '../../../components/PromoPoster';

import supabase from '../../../../db/supabase-client';
import { writeToStorage, readFromStorage } from '../../../utilities/utils';

function NheIndex() {
    const dataFromDB = useLoaderData();
    const location = useLocation();
    const [navigationReady, setNavigationReady] = useState(false);
    const navigate = useNavigate();
    const determineAutomaticNavigation = useCallback(() => {
        let raceParam = location.search.replace('?race=', '');
        if (raceParam === 'green_little_man') {
            navigate(`/nhes/${raceParam.replace(/_/g, '-').replace('man', 'men')}`);
        } else {
            navigate(`/nhes/${location.search.replace('?race=', '').replace(/[_]/g, '-')}s`);
        }
    }, [location.search, navigate])
    
    const sliderSettings = {
        autoplay: false,
        arrows: true,
        dots: false,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
    }

    useEffect(() => {
        const storedData = readFromStorage('session-storage', 'nhes');
        if (!storedData) {
            writeToStorage('session-storage', 'nhes', dataFromDB);
            setNavigationReady(true);
        }
    }, [dataFromDB])

    useEffect(() => {
        if (location.search && navigationReady) {
            determineAutomaticNavigation();
        }
    }, [location.search, navigationReady, determineAutomaticNavigation])

    return (
        <main className="nhes">
            <section className="nhes__intro">
                <h1 className="nhes__heading">TRAVELING AS A NON-HUMAN ENTITY (Nhe)</h1>
                <p className="nhes__paragraph">
                    Since the landmark passage of the Alien Liberty of Movement Act in 2094 all alien passengers are allowed to travel 
                    within the boundaries of the Solar Systemo. This historic legislation, approved by the Senate of the Solar Federation, officially mandates that non-human travelers be permitted to board commercial flights and travel normally between all established destinations within the Solar System.
                </p>
                <p className="nhes__paragraph">
                    In compliance on board Comet Spaceways flights
                </p>
            </section>
            <section className="nhes__races">
                <h2 className="nhes__subheading">PERMITTED RACES</h2>
                {dataFromDB && 
                <SliderTool contentType="component" settings={sliderSettings} >
                    {dataFromDB.map((el) => {
                        return (
                            <PromoPoster key={`alien-race-${el.id}`}
                                promoCatch=""
                                heading={el.full_name}
                                body={[
                                    el.full_name.toUpperCase(),
                                    el.intro
                                ]}
                                promoImg={`/characters/${el.cover_img}`}
                                alert="wanna know more?"
                                cta="inspect"
                                action={() => navigate(`/nhes/${el.full_name.toLowerCase().replace(/\s/g, '-')}`)}
                            />
                        )
                    })}
                </SliderTool>
                }
            </section>
            <section className="nhes__requirements">
                <h2 className="nhes__subheading">REQUIREMENTS</h2>
                <ContentSection>
                    <h3>1. Spacepass</h3>
                    <p className="nhes__paragraph">
                        In accordance with current law provisions established by the of the Solar Federation all passengers 
                        (human or non-human) must be in possession of a valid Spacepass in order to travel within the boundaries of the 
                        Solar System
                    </p>
                    <p>Spacepasses must be valid at the time of boarding a flight</p>
                </ContentSection>
                <ContentSection>
                    <h3>2. Goodwill Declaration</h3>
                    <p className="nhes__paragraph">
                        The Alien Liberty of Movement Act establishes that all alien passengers willing to travel within the 
                        boundaries of the Solar System must complete a declaration of godwill towards humanity.
                    </p>
                </ContentSection>
                <ContentSection>
                    <h3>3. Effective Communication Capacity</h3>
                    <p className="nhes__paragraph">
                        It is also established in the Alien Liberty of Movement Act establishes that all alien passengers willing to 
                        travel within the boundaries of the Solar System must be able to effectively communicate with flight crew members 
                        at all time
                    </p>
                </ContentSection>
            </section>
        </main>
    );
}

export async function fetchRaces() {
    // FAVOUR THIS IMPLEMENTATION WHEN LOADING DATA FROM SUPABASE
    async function getDataFromDB() {
        const { data, error } = await supabase
        .from('Races')
        .select()

        if (error) return { error };

        return data;
    }

    const races = await getDataFromDB();
    return races;

    // FAVOUR THIS IMPLEMENTATION WHEN LOADING DATA FROM JSON-SERVER 
    /* return fetch("http://localhost:3000/races")
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.log(err)); */
};
export default NheIndex;

