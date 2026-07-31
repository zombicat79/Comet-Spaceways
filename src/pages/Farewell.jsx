import { useNavigate } from 'react-router';

import Banner from './../components/Banner';
import Badge from '../components/Badge';

import footerBadge from '/logos/ctsw-logo_dark_badge.png';

function Farewell() {
    const navigate = useNavigate();

    return (
        <main className="farewell-page">
            <Banner
                textStyle={{ color: 'default', align: 'center' }}
                textContent={{
                    heading: 'Godspeed, spacefarer!',
                    body: 
                        <>
                            <p>
                                <span>{"You chose to bail out from our wondrous Comet Spaceways space-traveling scheme and all of its entailing amazing adventures, and will now remain stranded God knows where in space and time."}</span>
                                <br />
                                <span>{"No hard feelings. We'll be glad to have you back on board if you ever regret your decision!"}</span>
                            </p>
                        </>
                }}
                background={{ img: 'black-hole', height: 'full' }}
                cta={
                    <div className="badge" onClick={() => navigate("/create-account")}>
                        <Badge imgSrc={footerBadge} />
                    </div>
                }
            />
        </main>
    )
}

export default Farewell;