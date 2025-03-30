function Badge({ imgSrc }) {
    return (
        <div className="badge__container">
            <img className="badge__img" src={imgSrc} alt="Comet Spaceways badge" />
        </div>
    )
}

export default Badge;