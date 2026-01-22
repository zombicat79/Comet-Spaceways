import OrbitalObject from "./OrbitalObject";
import orbitCatalog from "../data/orbital-objects";

function StellarMap({ onFilter, onFilterReset, onTooltip }) {
    return (
        <figure className="stellar-map">
            <OrbitalObject
                key={orbitCatalog[0].orbitalObject.name}
                distance={orbitCatalog[0].distance}
                inclination={orbitCatalog[0].inclination}
                outermost={orbitCatalog[0].outermost}
                type={orbitCatalog[0].type}
                orbitalObject={orbitCatalog[0].orbitalObject}
                onFilter={onFilter}
                onTooltip={onTooltip}
            >
                <OrbitalObject
                    key={orbitCatalog[1].orbitalObject.name}
                    distance={orbitCatalog[1].distance}
                    inclination={orbitCatalog[1].inclination}
                    outermost={orbitCatalog[1].outermost}
                    type={orbitCatalog[1].type}
                    orbitalObject={orbitCatalog[1].orbitalObject}
                    onFilter={onFilter}
                    onTooltip={onTooltip}
                >
                    {orbitCatalog.map((item, index) => {
                        if (index % 2 === 0 && index !== 0 && orbitCatalog[index+1]) {
                            return (
                                <OrbitalObject
                                    key={item.orbitalObject.name}
                                    distance={item.distance}
                                    inclination={item.inclination}
                                    outermost={item.outermost}
                                    type={item.type}
                                    orbitalObject={item.orbitalObject}
                                    onFilter={onFilter}
                                    onTooltip={onTooltip}
                                >
                                    <OrbitalObject 
                                        distance={orbitCatalog[index+1].distance}
                                        inclination={orbitCatalog[index+1].inclination}
                                        outermost={orbitCatalog[index+1].outermost}
                                        type={orbitCatalog[index+1].type}
                                        orbitalObject={orbitCatalog[index+1].orbitalObject}
                                        onFilter={onFilter}
                                        onTooltip={onTooltip}
                                    />
                                </OrbitalObject>
                            )
                        } else if (!orbitCatalog[index+1]) {
                            return (
                                <OrbitalObject
                                    key={item.orbitalObject.name}
                                    distance={item.distance}
                                    inclination={item.inclination}
                                    outermost={item.outermost}
                                    type={item.type}
                                    orbitalObject={item.orbitalObject}
                                    onFilter={onFilter}
                                    onTooltip={onTooltip}
                                >
                                    <div className={"stellar-map__star"} onClick={() => onFilterReset()}></div>
                                </OrbitalObject>
                            )
                        } else {
                            return null;
                        }
                    })}
                </OrbitalObject>
            </OrbitalObject>
            
            
            { // CODE ABOVE RECREATES THE FOLLOWING STRUCURE FOR ANY GIVEN ITERABLE ARRAY OF ORBIT OBJECTS
            
            /* <OrbitalObject distance="30ua" outermost={true}>
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
            </OrbitalObject> */}
        </figure>
    )
}

export default StellarMap;