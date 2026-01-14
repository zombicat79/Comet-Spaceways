import { useNavigation, useLoaderData } from 'react-router';

import supabase from './../../../db/supabase-client';

import Card from './../../components/Card';

function DestinationsIndex() {
    const dataFromDB = useLoaderData();
    console.log(dataFromDB);

    if (dataFromDB) {
        return (
            <main className="destinations">
                {dataFromDB.data.map((el) => {
                    return (
                        <Card key={el.id} bgImg={el.cover_img.slice(0, el.cover_img.indexOf("."))}>
                            <div className="card__heading">
                                <h4 className="card__title">{el.full_name}</h4>
                            </div>
                            <div className="card__body">
                                
                            </div>
                        </Card>
                    )
                })}
            </main>
        )
    }

    return (
        <main className="destinations">
            This is the destinations page
        </main>
    )
}

export async function fetchDestinations() {
    async function getDataFromDB() {
        const { data, error } = await supabase
        .from('Destinations')
        .select()

        if (error) return { error };

        return { data };
    }

    const destinations = await getDataFromDB();
    return destinations;
};
export default DestinationsIndex;