import { useLoaderData } from 'react-router';

import ContentSection from '../../layout/ContentSection';
import Intersection from '../../components/Intersection';
import SliderTool from '../../components/SliderTool';
import PromoPoster from '../../components/PromoPoster';

import supabase from '../../../db/supabase-client';

function Nhes() {
    const dataFromDB = useLoaderData();
    const sliderSettings = {
        autoplay: false,
        arrows: true,
        dots: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
    }
    console.log(dataFromDB)

    return (
        <main className="nhes">
            <section className="nhes__intro">
                <h2 className="homepage__offers-heading">TRAVELING AS A NON-HUMAN ENTITY (Nhe)</h2>
                <p>
                    Since the landmark passage of the Alien Liberty of Movement Act in 2094 all alien passengers are allowed to travel 
                    within the boundaries of the Solar Systemo. This historic legislation, approved by the Senate of the Solar Federation, officially mandates that non-human travelers be permitted to board commercial flights and travel normally between all established destinations within the Solar System.
                </p>
                <p>
                    In compliance on board Comet Spaceways flights
                </p>
            </section>
            <section className="homepage__promos">
                <h3 className="homepage__offers-heading">PERMITTED RACES</h3>
                {dataFromDB && 
                <SliderTool contentType="component" settings={sliderSettings} >
                    {dataFromDB.map((el) => {
                        return (
                            <PromoPoster
                                promoCatch=""
                                heading={el.full_name}
                                body={[
                                    el.full_name.toUpperCase(),
                                    el.intro
                                ]}
                                promoImg={`/characters/${el.cover_img}`}
                                alert="wanna know more?"
                                cta="inspect"
                            />
                        )
                    })}
                </SliderTool>
                }
            </section>
            <section>
            <h3 className="homepage__offers-heading">REQUIREMENTS</h3>
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
export default Nhes;

