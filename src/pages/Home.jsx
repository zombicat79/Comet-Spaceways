import Header from './../layout/Header';
import Footer from './../layout/Footer';

import Banner from './../components/Banner';
import Card from './../components/Card';
import PriceTag from './../components/PriceTag';

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
        <>
            <Header />
            <main className="homepage">
                <Banner
                    textStyle={{ color: 'default', align: 'default' }}
                    textContent={{
                        heading: 'Go conquer the universe',
                        body: ''
                    }}
                    background={{ img: 'space-beer', height: 'full' }}
                />
                <section className="">
                    <h3>OFFERS FROM</h3>
                    <div className="homepage__offers">
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
            </main>
            <Footer />
        </>
    );
}

export default Home;

