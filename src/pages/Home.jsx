import { FlightSearchProvider } from '../contexts/FlightSearchContext';

import Banner from './../components/Banner';
import FlightSearch from './../components/flight/FlightSearch';
import Card from './../components/Card';
import PriceTag from './../components/PriceTag';
import Intersection from '../components/Intersection';
import PromoPoster from '../components/PromoPoster';

const offers = [
    {
        id: 1,
        destination: 'low orbit (cel)',
        bgImg: 'celestia',
        price: 19.75,
        priceType: 'initial',
        currency: 'eur'
    },
    {
        id: 2,
        destination: 'moon (lun)',
        bgImg: 'moon',
        price: 35.49,
        priceType: 'initial',
        currency: 'eur'
    },
    {
        id: 3,
        destination: 'venus (ven)',
        bgImg: 'venus',
        price: 84.99,
        priceType: 'initial',
        currency: 'eur'
    },
    {
        id: 4,
        destination: 'mars (mrs)',
        bgImg: 'mars',
        price: 50.75,
        priceType: 'initial',
        currency: 'eur'
    }
]

function Home() {
    return (
        <main className="homepage">
            <Banner
                textStyle={{ color: 'default', align: 'center' }}
                textContent={{
                    heading: 'Go conquer the universe',
                    body: ''
                }}
                background={{ img: 'space-beer', height: 'full' }}
            >
                <FlightSearchProvider>
                    <FlightSearch />
                </FlightSearchProvider>
            </Banner>
            <section className="homepage__offers">
                <h3 className="homepage__offers-heading">OFFERS FROM PLANET EARTH</h3>
                <div className="homepage__offers-list">
                {offers.map((el) => {
                    return (
                        <Card key={el.id} bgImg={el.bgImg}>
                            <div className="card__heading">
                                <h4 className="card__title">{el.destination}</h4>
                            </div>
                            <div className="card__body">
                                <PriceTag 
                                    price={el.price} 
                                    priceType={el.priceType}
                                    currency={el.currency}
                                />
                            </div>
                        </Card>
                    )
                })}
                </div>
            </section>
            <Intersection type="cosmic" />
            <section className="homepage__promos">
                <PromoPoster
                    promoCatch="Thinking of moving to some other star? 🤔"
                    heading="trappist-1e"
                    body={[
                        "Join humankind's colonization effort, and embark on a life-changing journey that will take you and your family to a new home on a brave new world.",
                        "New generational spaceship set to depart on early 2127."
                    ]}
                    promoImg="trappist"
                    alert="do not miss your spot!"
                    cta="book now"
                />
            </section>
        </main>
    );
}

export default Home;

