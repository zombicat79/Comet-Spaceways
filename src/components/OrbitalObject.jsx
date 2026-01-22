function OrbitalObject({ children, type, distance, inclination, outermost, orbitalObject, onFilter, onTooltip }) {
    return (
        <div className={outermost ? `orbit orbit--${type} orbit--${distance} orbit--outermost orbit--${inclination}` : `orbit orbit--${type} orbit--${distance} orbit--${inclination}` }>
            <div className={`
                orbit__object 
                orbit__object--${orbitalObject.size} 
                orbit__object--clickable-${orbitalObject.clickable} 
                orbit__object--ringed-${orbitalObject.ringed}
                orbit__object--${orbitalObject.background}
                orbit__object--${orbitalObject.background}--${orbitalObject.color}
            `} 
                onClick={() => orbitalObject.clickable ? onFilter(orbitalObject.name, "domains") : null}
                onMouseOver={() => onTooltip("show", orbitalObject.name)}
                onMouseOut={() => onTooltip("hide")}
            >
            </div>
            {children}
        </div>
    )
}

export default OrbitalObject;