import { useContext } from 'react';
import { LayoutContext } from '../contexts/LayoutContext';

import NavMenu from './../components/NavMenu';
import NavBar from './../components/NavBar';
import Badge from './../components/Badge';
import WorkInProgress from '../components/infopieces/WorkInProgress';

const footerLinks = {
    top1: [
        /* { id: 1, text: 'About us', action: 'navigate', path: '', decoration: 'underline' },
        { id: 2, text: 'Comet Global', action: 'navigate', path: '', decoration: 'underline' },
        { id: 3, text: 'Work with us', action: 'navigate', path: '', decoration: 'underline' } */
        { id: 1, text: 'About us', action: 'link', payload: <WorkInProgress />, decoration: 'underline' },
        { id: 2, text: 'Comet Global', action: 'link', payload: <WorkInProgress />, decoration: 'underline' },
        { id: 3, text: 'Work with us', action: 'link', payload: <WorkInProgress />, decoration: 'underline' }
    ],
    top2: [
        /* { id: 4, text: 'Help', action: 'navigate', path: '', decoration: 'underline' },
        { id: 5, text: 'FAQs & info', action: 'navigate', path: '', decoration: 'underline' },
        { id: 6, text: 'Contact', action: 'expand', path: null, decoration: 'underline' } */
        { id: 4, text: 'Help', action: 'link', payload: <WorkInProgress />, decoration: 'underline' },
        { id: 5, text: 'FAQs & info', action: 'link', payload: <WorkInProgress />, decoration: 'underline' },
        { id: 6, text: 'Contact', action: 'link', payload: <WorkInProgress />, decoration: 'underline' }
    ],
    bottom: [
        /* { id: 14, text: 'Website terms of use', action: 'navigate', path: '', decoration: null },
        { id: 15, text: 'Cookie policy', action: 'navigate', path: '', decoration: null },
        { id: 16, text: 'Privacy policy', action: 'navigate', path: '', decoration: null } */
        { id: 14, text: 'Website terms of use', action: 'link', payload: <WorkInProgress />, decoration: null },
        { id: 15, text: 'Cookie policy', action: 'link', payload: <WorkInProgress />, decoration: null },
        { id: 16, text: 'Privacy policy', action: 'link', payload: <WorkInProgress />, decoration: null }
    ]
}

function Footer() {
    const { handlePopupLaunch } = useContext(LayoutContext);

    return (
        <footer className="footer">
            <section className="footer__section footer__section--top">
                <Badge imgSrc="./logos/ctsw-logo_dark_badge.png" />
                <NavMenu 
                    title="Who we are"
                    columns={1}
                    rows={3}
                    links={footerLinks.top1}
                    decoration='underlined'
                    tooling={{handlePopupLaunch}}
                />
                <NavMenu 
                    title="Customer support"
                    columns={1}
                    rows={3}
                    links={footerLinks.top2}
                    decoration='underlined'
                    tooling={{handlePopupLaunch}}
                />
            </section>
            <section className="footer__section footer__section--bottom">
                <NavBar 
                    direction='horizontal'
                    links={footerLinks.bottom}
                    tooling={{handlePopupLaunch}}
                />
            </section>
        </footer>
    );
}

export default Footer;