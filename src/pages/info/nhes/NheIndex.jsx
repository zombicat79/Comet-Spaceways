import { useState, useEffect, useContext, useCallback } from 'react';
import { LayoutContext } from '../../../contexts/LayoutContext';
import { useLoaderData, useNavigate, useLocation, Link } from 'react-router';
import { BlobProvider } from '@react-pdf/renderer';
import { GoodwillDoc } from '../../../templates/pdf/GoodwillDoc';

import ContentSection from './../../../layout/ContentSection';
import SliderTool from '../../../components/SliderTool';
import PromoPoster from '../../../components/PromoPoster';
import Spacepass from './../../../components/passengers/Spacepass';
import Button from '../../../components/Button';
import SvgIcon from '../../../components/SvgIcon';

import supabase from '../../../../db/supabase-client';
import { writeToStorage, readFromStorage } from '../../../utilities/utils';

function NheIndex() {
    const { layoutState, handlePopupLaunch } = useContext(LayoutContext);
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
                    outposts under the rule of the human civilization.
                </p>
                <p className="nhes__paragraph">
                    In compliance with current law provisions, we at <span>Comet Spaceways</span> guarantee all of our non-human customers 
                    their right to access our transport services, provided they prove themselves eligible by race and capable of meeting the 
                    legal requirements listed further below by the time of their scheduled departure: 
                </p>
                <img src="/logos/sfederation-logo_light.png" alt="solar federation logo" />
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
                    {layoutState.viewportWidth > 768
                        ? <Spacepass />
                        : <Button 
                            type="secondary"
                            action={() => {
                                handlePopupLaunch({ 
                                    modalClass: 'presentational', 
                                    content: 'spacepass', 
                                    props: {body: <Spacepass orientation='portrait' />, contentModifier: 'rotate90'}
                                })}
                            }
                            text="View spacepass" 
                        />
                    }
                    <p className="content-section__paragraph text-bold text-alert">
                        <span className="inline-icon">⚠️</span> All spacepasses must be valid at scheduled boarding time!
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
                    <p className="content-section__paragraph">
                        In compliance with this particular legal imperative we at Comet Spaceways demand that all our non-human passengers (NHEs) provide a signed 
                        copy of such declaration, on every single occasion they intend to use our transport services: 
                    </p>
                    <ul className="content-section__list content-section__list--numeric">
                        <p className="list-title">HOW TO</p>
                        <li className="list-element">
                            <p className="content-section__paragraph">
                                A sample "Declaration of godwill" document may be generated and downloaded for a detailed inspection of its clauses:
                            </p>
                            <BlobProvider document={<GoodwillDoc />}>
                                {({ blob, url, loading, error }) => {
                                    return (
                                        <Link to={url} target='_blank'>
                                            <Button type="secondary" text="Generate" />
                                        </Link>
                                    )
                                }}
                            </BlobProvider>
                        </li>
                        <li className="list-element">
                            <p className="content-section__paragraph">
                                Formal acceptance and proper fulfillment with actual passenger data will be automatically carried out during flight check-in 
                                procedures (no need to fill out the document beforehand).
                            </p>
                        </li>
                    </ul>
                </ContentSection>
                <ContentSection>
                    <h3 className="content-section__heading">3. Effective Communication Capacity</h3>
                    <p className="content-section__paragraph">
                        In order to prevent any cultural misunderstandings that may pose a disruption to the security of other passengers, it 
                        is also established in the Alien Liberty of Movement Act that all alien passengers traveling in commercial flights 
                        must be able to effectively communicate with flight crew members at all time.
                    </p>
                    <p className="content-section__paragraph">
                        Non-human passengers in Comet Spaceways flights will thus be allowed to travel, provided they find themselves 
                        in one or more of the following situations at the time of boarding:
                    </p>
                    <ul className="content-section__list">
                        <li className={layoutState.viewportWidth > 360 ? `list-element list-element--horizontal` : `list-element list-element--vertical`}>
                            <SvgIcon design="speech" color="#272643" />
                            <p className="content-section__paragraph text-bold">
                                Demonstrates a minimum level of English or any other commonly spoken human language
                            </p>
                        </li>
                        <li className={layoutState.viewportWidth > 360 ? `list-element list-element--horizontal` : `list-element list-element--vertical`}>
                            <SvgIcon design="brain" color="#272643" />
                            <p className="content-section__paragraph text-bold">
                                Possesses natural psionic capacities and the possibility to establish telepathic links with other beings
                            </p>
                        </li>
                        <li className={layoutState.viewportWidth > 360 ? `list-element list-element--horizontal` : `list-element list-element--vertical`}>
                            <SvgIcon design="tools" color="#272643" />
                            <p className="content-section__paragraph text-bold">
                                Brings along certified automated "alien-to-human" translation devices
                            </p>
                        </li>
                        <li className={layoutState.viewportWidth > 360 ? `list-element list-element--horizontal` : `list-element list-element--vertical`}>
                            <SvgIcon design="people" color="#272643" />
                            <p className="content-section__paragraph text-bold">
                                Is accompanied by humanoids or other able NHEs traveling in the same party 
                            </p>
                        </li>
                        <li className={layoutState.viewportWidth > 360 ? `list-element list-element--horizontal` : `list-element list-element--vertical`}>
                            <SvgIcon design="pet" color="#272643" />
                            <p className="content-section__paragraph text-bold">
                                Carries assistive animals or pets capable of basic speech and emotional relay
                            </p>
                        </li>
                    </ul>
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

