import NavMenu from './../components/NavMenu';
import NavBar from './../components/NavBar';
import Badge from './../components/Badge';
import Copyright from './../components/Copyright';

const footerLinks = {
    top1: [
        { id: 1, text: 'About us', action: 'navigate', path: '', decoration: 'underline' },
        { id: 2, text: 'Comet Global', action: 'navigate', path: '', decoration: 'underline' },
        { id: 3, text: 'Work with us', action: 'navigate', path: '', decoration: 'underline' }
    ],
    top2: [
        { id: 4, text: 'Help', action: 'navigate', path: '', decoration: 'underline' },
        { id: 5, text: 'FAQs & info', action: 'navigate', path: '', decoration: 'underline' },
        { id: 6, text: 'Contact', action: 'expand', path: null, decoration: 'underline' }
    ],
    bottom: [
        { id: 14, text: 'Website terms of use', action: 'navigate', path: '', decoration: null },
        { id: 15, text: 'Cookie policy', action: 'navigate', path: '', decoration: null },
        { id: 16, text: 'Privacy policy', action: 'navigate', path: '', decoration: null }
    ]
}

function Footer() {
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
                />
                <NavMenu 
                    title="Customer support"
                    columns={1}
                    rows={3}
                    links={footerLinks.top2}
                    decoration='underlined'
                />
            </section>
            <section className="footer__section footer__section--bottom">
                <Copyright />
                <NavBar 
                    direction='horizontal'
                    links={footerLinks.bottom}
                />
            </section>
        </footer>
    );
}

export default Footer;