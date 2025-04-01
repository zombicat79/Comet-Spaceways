function Selector({ type, identifier, currentValue }) {
    return (
        <div className="selector">
            <p className="selector__id">{identifier}</p>
            <p className="selector__value">{currentValue}</p>
        </div>
    )
}

export default Selector;