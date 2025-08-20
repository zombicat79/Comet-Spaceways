import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

import SvgIcon from './SvgIcon';

function ShoppingCart() {
    const { cartState } = useContext(CartContext);

    if (!cartState.outboundFlight && !cartState.inboundFlight) {
        return (
            <section className="cart">
                <div className="aside__body cart__content cart__content--void">
                    <div className="cart__img">
                        <SvgIcon design="ufo" color="#272643" />
                        <p>???</p>
                    </div>
                    <p className="cart__message">
                        <span>Your cart is as void as the interstellar space</span>
                        <br/>
                        <span>Pick some flights and...</span>
                    </p>
                    <h2 className="cart_motto">Go conquer the universe!</h2>
                </div>
            </section>
        )
    }

    return (
        <div>This is the fucking cart</div>
    )
}

export default ShoppingCart;