function Intersection({ type }) {
    return (
        <section className={`intersection--${type}`}>
            <div className={`intersection--${type}__ellipse`}>
                <div className={`intersection--${type}__star`}></div>
            </div>
        </section>
    )
}

export default Intersection;