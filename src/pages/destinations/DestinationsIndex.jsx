import { useContext } from 'react';
import { DestinationsContext } from '../../contexts/DestinationsContext';

import Card from './../../components/Card';

function DestinationsIndex() {
    const { destinations } = useContext(DestinationsContext);

    if (destinations.length > 0) {
        return (
            <main className="destinations">
                <h3 className="homepage__offers-heading">OUR DESTINATIONS</h3>
                <div className="destinations__list">
                    {destinations.map((el) => {
                        return (
                            <Card key={el.id} bgImg={el.cover_img} link={el.port}>
                                <div className="card__heading">
                                    <h4 className="card__title">{el.full_name}</h4>
                                </div>
                                <div className="card__body">
                                    
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