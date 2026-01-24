function Figure({ layout, imgPath, img, text, align }) {
    return (
        <figure className={`figure figure--${layout}`}>
            <a className={`figure__img-wrapper figure__img-wrapper--${align}`} href={imgPath+img} target="_blank" >
                <img className={`figure__img figure__img--${align}`} src={imgPath+img} />
            </a>
            <p className={`figure__text figure__text--${align}`}>{text}</p>
        </figure>
    )
}

export default Figure;