import Copyright from './../components/Copyright';

import humanDone from '/logos/human-certified.png';

function Subfooter() {
    return (
        <footer className="subfooter">
            <Copyright />
            <p className="subfooter__text">
                This site has been designed and developed by 
                <a className="subfooter__link" href="https://zombiecat.dev/" target="_blank" rel="noreferrer">
                    <span className="subfooter__maker">Zombiecat</span>
                    <img className="subfooter__makerLogo" src="./../logos/zombiecat-trans-logo.png" alt="ZombieCat logo" />
                </a>
            </p>
            <img className="subfooter__humanBadge" src={humanDone} alt="Done by human" />
        </footer>
    )
}

export default Subfooter;