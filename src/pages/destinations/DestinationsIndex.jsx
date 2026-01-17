import { useContext } from 'react';
import { DestinationsContext } from '../../contexts/DestinationsContext';

import Card from './../../components/Card';
import PriceTag from '../../components/PriceTag';

function DestinationsIndex() {
    const { destinations } = useContext(DestinationsContext);

    if (destinations.length > 0) {
        return (
            <main className="destinations">
                <div className="destinations__heading">
                    <h2>OUR DESTINATIONS WITHIN THE SOLAR SYSTEM</h2>
                    <p></p>
                </div>
                <div className="destinations__list">
                    {destinations.map((el) => {
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
                    })}
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