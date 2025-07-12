import Header from './Header';
import Footer from './Footer';
import Subfooter from './Subfooter';
import Aside from './Aside';
import Home from './../pages/Home';
import NotFound from '../pages/NotFound';

function AppLayout() {
    return (
        <>
            <Header />
            <Aside side="left" />
            <Home />
            <Footer />
            <Subfooter />
        </>
    )
}

export default AppLayout;