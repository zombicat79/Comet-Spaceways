import Copyright from './../components/Copyright';

function Subfooter() {
    return (
        <div className="subfooter">
            <Copyright />
            <p className="subfooter__text">
                This site has been designed and developed by 
                <a className="subfooter__link" href="https://zombiecat.dev/" target="_blank" rel="noreferrer">
                    <span className="subfooter__maker">Zombiecat</span>
                    <img className="subfooter__makerLogo" src="./logos/zombiecat-trans-logo.png" alt="ZombieCat logo" />
                </a>
            </p>
        </div>
    )
}

export default Subfooter;