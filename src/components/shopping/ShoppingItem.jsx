import { useState } from 'react';

import RoutingDiagram from '../RoutingDiagram';
import SvgIcon from "../SvgIcon";

function ShoppingItem({ isFlight, data }) {
    const [isExpanded, setIsExpanded] = useState(false);

    let flightType = null;
    if (isFlight) {
        data.type === 'outbound' ? flightType = 'depart' : flightType = 'return';
    }

    return (
        <article className="shop-item">
            <section className="shop-item__header" onClick={() => setIsExpanded(prev => !prev)}>
                <div className={isFlight ? `shop-item__identifier shop-item__identifier--${flightType}` : 'shop-item__identifier'}>
                    <SvgIcon design="ufo" color="#272643" />
                    <p>{data.type === 'outbound' ? 'DEPART' : 'RETURN'}</p>
                </div>
                <span className="expansion-arrow">&gt;</span>
            </section>
            {isFlight && 
            <section className="shop-item__routing">
                <div className="routing__infopanel">
                    <span>{data.departure_date}</span>
                    <span>{data.arrival_date}</span>
                </div>
                <RoutingDiagram />
                <div className="routing__infopanel">
                    <span>{data.origin}</span>
                    <span>{data.destination}</span>
                </div>
            </section>
            }
            <section className="shop-item__summary"></section>
            <section className="shop-item__total">
                <p>{flightType} total</p>
                <p>{data.price}€</p>
            </section>
        </article>
    )
}

export default ShoppingItem;