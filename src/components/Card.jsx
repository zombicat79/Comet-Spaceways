function Card({ children, bgImg }) {
    return (
        <a className="card element--clickable">
            <div className={`card__img card__img--${bgImg}`}></div>
            <div className="card__content">
                {children}
            </div>
        </a>
    )
}

export default Card;