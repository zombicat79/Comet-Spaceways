import Header from './../layout/Header';
import Footer from './../layout/Footer';

import Banner from './../components/Banner';

function Home() {
    return (
        <>
            <Header />
            <main>
                <Banner
                    textStyle={{ color: 'default', align: 'default' }}
                    textContent={{
                        heading: 'Go conquer the universe',
                        body: ''
                    }}
                    background={{ img: 'space-tourism', height: 'full' }}
                />
            </main>
            <Footer />
        </>
    );
}

export default Home;