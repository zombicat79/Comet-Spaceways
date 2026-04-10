import { useContext } from 'react';
import { LayoutContext } from './../contexts/LayoutContext';

import Button from './../components/Button';

function PromoPoster({ promoCatch, heading, body, alert, cta, promoImg }) {
    const { handlePopupLaunch } = useContext(LayoutContext);
    const featureImg = {
        src: `./../assets/images/${promoImg}`,
        alt: `${promoImg.match(/\/[\w\s-]+(?=.webp$)/)[0].replace('/', '')} poster`
    }

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
                
                <Button type="secondary" action={() => handlePopupLaunch({ modalClass: 'generic', content: 'work-in-progress' })} text={cta} />
            </div>
            <div className="promoposter__side promoposter__side--right">
                <img className="promoposter__img" src={featureImg.src} alt={featureImg.alt} />
            </div>
        </div>
    )
}

export default PromoPoster;