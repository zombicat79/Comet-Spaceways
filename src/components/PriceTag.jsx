function PriceTag({ price, priceType, currency }) {
    return (
        <div className="pricetag">
            {priceType === 'initial' &&
                <p className="pricetag__prefix">from</p>
            }
            <p className="pricetag__amount">{price} {currency}<span className="pricetag__prompt">&gt;</span></p>
        </div>
    )
}

export default PriceTag;

