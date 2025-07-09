import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';
import Home from './../pages/Home';

function AppLayout() {
    return (
        <>
            <Header />
            <Aside side="left" />
            <Home />
            <Footer />
        </>
    )
}

export default AppLayout;