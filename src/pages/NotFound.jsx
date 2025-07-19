import { useNavigate } from 'react-router';

import Banner from './../components/Banner';
import Button from '../components/Button';

function NotFound() {
    const navigate = useNavigate();

    function goBook() {
        navigate('/');
    }

    return (
        <main className="notfound">
            <Banner
                textStyle={{ color: 'default', align: 'center' }}
                textContent={{
                    heading: 'Planet not found',
                    body: 
                        <>
                            <p>
                                <span>{"Ooops! It seems you tried to navigate to some faraway celestial body that doesn't exist..."}</span>
                                <br />
                                <span>{'Hop on one of our spaceships and get back on track on your voyage to the stars!'}</span>
                            </p>
                            <Button type="secondary" action={goBook} text="Search Flight" />
                        </>
                }}
                background={{ img: 'black-hole', height: 'full' }}
            />
        </main>
    )
}

export default NotFound;