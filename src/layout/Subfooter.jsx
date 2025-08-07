import Copyright from './../components/Copyright';

import zombiecatLogo from '/logos/zombiecat-trans-logo.png';

function Subfooter() {
    return (
        <footer className="subfooter">
            <Copyright />
            <p className="subfooter__text">
                This site has been designed and developed by 
                <a className="subfooter__link" href="https://zombiecat.dev/" target="_blank" rel="noreferrer">
                    <span className="subfooter__maker">Zombiecat</span>
                    <img className="subfooter__makerLogo" src={zombiecatLogo} alt="ZombieCat logo" />
                </a>
            </p>
        </footer>
    )
}

export default Subfooter;