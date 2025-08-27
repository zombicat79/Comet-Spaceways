import { useState } from 'react';

import SvgIcon from "../SvgIcon";

function ShoppingItem({ isFlight, data }) {
    const [isExpanded, setIsExpanded] = useState(false);

    let flightType = null;
    if (isFlight) {
        data.type === 'outbound' ? flightType = 'depart' : flightType = 'return';
    }

    return (
        <div className="shop-item">
            <div className="shop-item__header" onClick={() => setIsExpanded(prev => !prev)}>
                <div className={isFlight ? `shop-item__identifier shop-item__identifier--${flightType}` : 'shop-item__identifier'}>
                    <SvgIcon design="ufo" color="#272643" />
                    <p>{data.type === 'outbound' ? 'DEPART' : 'RETURN'}</p>
                </div>
                <span className="expansion-arrow">&gt;</span>
            </div>
            {isFlight && <div className="shop-item__routing"></div>}
            <div className="shop-item__summary"></div>
            <div className="shop-item__total">
                <p>{flightType} total</p>
                <p>{data.price}€</p>
            </div>
        </div>
    )
}

export default ShoppingItem;