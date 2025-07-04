import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';
import Home from './../pages/Home';

function AppLayout() {
    return (
        <>
            <Header />
            <Aside side="right" />
            <Home />
            <Footer />
        </>
    )
}

export default AppLayout;