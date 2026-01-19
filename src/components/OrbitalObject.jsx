function OrbitalObject({ children, type, distance, outermost, orbitalObject }) {
    return (
        <div className={outermost ? `orbit orbit--${type} orbit--${distance} orbit--outermost` : `orbit orbit--${type} orbit--${distance}` }>
            <div className={`orbit__object orbit__object--${orbitalObject.size} orbit__object--clickable-${orbitalObject.clickable}`}></div>
            {children}
        </div>
    )
}

export default OrbitalObject;