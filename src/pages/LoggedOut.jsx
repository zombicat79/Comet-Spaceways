import { useContext } from 'react';
import { LayoutContext } from '../contexts/LayoutContext';

import Banner from './../components/Banner';
import Badge from '../components/Badge';

import footerBadge from '/logos/ctsw-logo_dark_badge.png';

function LoggedOut() {
    const { handlePopupLaunch } = useContext(LayoutContext);

    return (
        <main className="logged-out-page">
            <Banner
                textStyle={{ color: 'default', align: 'center' }}
                textContent={{
                    heading: 'Godspeed, spacefarer!',
                    body: 
                        <>
                            <p>
                                <span>{"You logged out from your Comet Spaceways account, and are now cruising at the speed of light far beyond reach."}</span>
                                <br />
                                <span>{'Come back soon for more adventure!'}</span>
                            </p>
                        </>
                }}
                background={{ img: 'space-sunrise', height: 'full' }}
                cta={
                    <div className="badge" onClick={() => handlePopupLaunch({ modalClass: 'large', content: 'login' })}>
                        <Badge imgSrc={footerBadge} />
                    </div>
                }
            />
        </main>
    )
}

export default LoggedOut;