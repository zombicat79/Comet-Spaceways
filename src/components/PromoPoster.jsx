import Button from './../components/Button';

function PromoPoster({ promoCatch, heading, body, alert, cta, promoImg }) {
    console.log(body)
    
    return (
        <div className="promoposter">
            <div className="promoposter__side promoposter__side--left">
                <p className="promoposter__catch">{promoCatch}</p>
                <h2 className="promoposter__heading">{heading}</h2>
                <div className="promoposter__body">
                    {body.map((paragraph, index) => {
                        return <p key={"p" + index}>{paragraph}</p>
                    })}
                </div>
                <p className="promoposter__alert">{alert}</p>
                
                <Button type="secondary" action="" text="book now" />
            </div>
            <div className="promoposter__side promoposter__side--right">
                <img className="promoposter__img" src={`./assets/images/${promoImg}_promotion.webp`} alt={`${promoImg} poster`} />
            </div>
        </div>
    )
}

export default PromoPoster;