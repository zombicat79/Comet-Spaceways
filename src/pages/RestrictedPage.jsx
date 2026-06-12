import { useNavigate } from 'react-router';

import Banner from './../components/Banner';
import Button from '../components/Button';

function RestrictedPage({ onLogin }) {
    const navigate = useNavigate();

    function goRegister() {
        navigate('/create-account');
    }

    return (
        <main className="restricted-page">
            <Banner
                textStyle={{ color: 'default', align: 'center' }}
                textContent={{
                    heading: 'Acces denied',
                    body: 
                        <>
                            <p>
                                <span>{"Ooops! It seems you lack authorization to explore this particular corner of the galaxy..."}</span>
                                <br />
                                <span>{'Make sure you are properly authenticated as a Comet Spaceways registered user!'}</span>
                            </p>
                        </>
                }}
                background={{ img: 'telescope', height: 'full' }}
                cta={
                    <>
                        <Button type="secondary" action={onLogin} text="Log In" />
                        <Button type="secondary" action={goRegister} text="Register" />
                    </>
                }
            />
        </main>
    )
}

export default RestrictedPage;