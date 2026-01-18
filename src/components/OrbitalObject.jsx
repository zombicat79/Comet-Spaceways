function OrbitalObject({ children, type, distance, outermost, objectSize }) {
    return (
        <div className={outermost ? `orbit orbit--${type} orbit--${distance} orbit--outermost` : `orbit orbit--${type} orbit--${distance}` }>
            <div className="orbit__object"></div>
            {children}
        </div>
    )
}

export default OrbitalObject;