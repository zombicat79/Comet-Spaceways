import OrbitalObject from "./OrbitalObject";

function StellarMap() {
    return (
        <figure className="stellar-map">
            <OrbitalObject distance="30ua" outermost={true}>
                <OrbitalObject distance="20ua">
                    <OrbitalObject distance="10ua">
                        <OrbitalObject distance="5ua">
                            <OrbitalObject type="asteroid" distance="3ua">
                                <OrbitalObject distance="1halfua">
                                    <OrbitalObject distance="1ua">
                                        <OrbitalObject distance="3quarterua">
                                            <OrbitalObject distance="halfua">
                                                <div className={"stellar-map__star"}></div>
                                            </OrbitalObject>
                                        </OrbitalObject>
                                    </OrbitalObject>
                                </OrbitalObject>
                            </OrbitalObject>
                        </OrbitalObject>
                    </OrbitalObject>
                </OrbitalObject> 
            </OrbitalObject>
        </figure>
    )
}

export default StellarMap;