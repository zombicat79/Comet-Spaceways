function Banner({ heading, background, height }) {
    return (
        <section className={`banner banner--${background} banner--${height}`}>
            <h1 className="banner__heading">{heading}</h1>
        </section>
    )
}

export default Banner;