function Banner({ background, textStyle, textContent, children }) {
    
    let backgroundOption = 0;
    switch(background.img) {
        case 'space-beer':
            backgroundOption = 1;
            break;
        case 'space-sunrise':
            backgroundOption = 2;
            break;
        case 'earth-moon':
            backgroundOption = 3;
            break;
        default:
            backgroundOption = 1;
    }

    return (
        <section className={`banner banner--${backgroundOption} banner--${background.height}`}>
            {children}
            
            <div className={textStyle.align ? `banner__msg banner__msg--${textStyle.align}`: 'banner__msg'}>
                <h1 className="banner__heading">{textContent.heading}</h1>
                <p className="banner__text">{textContent.body}</p>
            </div>
        </section>
    )
}

export default Banner;