import Header from './../layout/Header';
import Footer from './../layout/Footer';

import Banner from './../components/Banner';

function Home() {
    return (
        <>
            <Header />
            <main>
                <Banner
                    heading="Go conquer the universe"
                    background={1}
                    height="full"
                />
            </main>
            <Footer />
        </>
    );
}

export default Home;