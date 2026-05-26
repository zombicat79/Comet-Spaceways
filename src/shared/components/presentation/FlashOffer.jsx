import offerIcon from '/assets/icons/offer-icon.png';

function FlashOffer({ width, text, textAngle }) {
    return (
        <figure className={`flashoffer flashoffer--${width}`}>
            <img className="flashoffer__img" src={offerIcon} alt="flash offer" />
            <p className={`flashoffer__text flashoffer__text--${textAngle}`}>{text}</p>
        </figure>
    )
}

export default FlashOffer;