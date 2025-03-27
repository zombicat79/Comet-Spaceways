function Banner({ background, textStyle, textContent }) {
    
    let backgroundOption = 0;
    switch(background.img) {
        case 'space-tourism':
            backgroundOption = 1;
            break;
        default:
            return;
    }

    return (
        <section className={`banner banner--${backgroundOption} banner--${background.height}`}>
            <div className={textStyle.align ? `banner__msg banner__msg--${textStyle.align}`: 'banner__msg'}>
                <h1 className="banner__heading">{textContent.heading}</h1>
                <p className="banner__text">{textContent.body}</p>
            </div>
        </section>
    )
}

export default Banner;