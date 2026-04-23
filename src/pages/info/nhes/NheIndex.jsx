import { useState, useEffect, useCallback } from 'react';
import { useLoaderData, useNavigate, useLocation, Link } from 'react-router';

import ContentSection from './../../../layout/ContentSection';
import SliderTool from '../../../components/SliderTool';
import PromoPoster from '../../../components/PromoPoster';
import Spacepass from './../../../components/passengers/Spacepass';
import Button from '../../../components/Button';

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
                <p className="nhes__paragraph mb-2">
                    Since the landmark passage of the <span>Alien Liberty of Movement Act</span> Act in 2094 all alien passengers 
                    are allowed to travel between any two given points within the boundaries of the Solar System. This historic legislation, 
                    approved by the Senate of the Solar Federation and sanctioned by its Supreme AI Counsellor, officially mandates that 
                    non-human travelers be permitted to board commercial flights and travel normally between all worlds, colonies and civilian 
                    outposts under the rule of the united humanoid civilization.
                </p>
                <p className="nhes__paragraph">
                    In compliance with current law provisions, we at <span>Comet Spaceways</span> guarantee all of our non-human customers 
                    their right to access our transport services, provided they prove themselves eligible by race and capable of meeting the 
                    legal requirements listed further below by the time of their scheduled departure: 
                </p>
                <img src="/logos/sfederation-logo_light.png" style={{width: "200px"}} />
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
                    <h3 className="content-section__heading">1. Spacepass</h3>
                    <p className="content-section__paragraph">
                        In accordance with current law provisions and directives established by the Government of the Solar Federation, all 
                        passengers (human or non-human) must be in possession of a valid Spacepass in order to travel within the boundaries 
                        of the Solar System:
                    </p>
                    <Spacepass />
                    <p className="content-section__paragraph text-bold text-alert">
                        <span style={{fontSize: '30px'}}>⚠️</span> All spacepasses must be valid at scheduled boarding time!
                    </p>
                    <ul className="content-section__list content-section__list--numeric">
                        <p className="list-title">HOW TO</p>
                        <li className="list-element">
                            <p className="content-section__paragraph">
                                New spacepasses will be obtained upon the creation of a new user account with Comet Spaceways:
                            </p>
                            <Link to="/create-account">
                                <Button type="secondary" text="Create account" />
                            </Link>
                        </li>
                        <li className="list-element">
                            <p className="content-section__paragraph">
                                Issues with expired or invalid spacepasses may be solved at the relevant consulates of the Solar Federation:
                            </p>
                            <Link to="/destinations">
                                <Button type="secondary" text="Check stellar map" />
                            </Link>
                        </li>
                    </ul>
                </ContentSection>
                <ContentSection>
                    <h3 className="content-section__heading">2. Declaration of Goodwill</h3>
                    <p className="content-section__paragraph">
                        The Alien Liberty of Movement Act establishes that all alien passengers willing to travel within the 
                        boundaries of the Solar System must complete a declaration of godwill towards humanity, thereby explicitly refraining of 
                        participating in any activities whatsoever that may lead to or result in harm to human civilization and/or any of its 
                        interests.
                    </p>
                    <p>In compliance with Comet Spaceways demands its alien passengers to </p>
                </ContentSection>
                <ContentSection>
                    <h3 className="content-section__heading">3. Effective Communication Capacity</h3>
                    <p className="content-section__paragraph">
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

