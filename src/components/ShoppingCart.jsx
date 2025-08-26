import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

import SvgIcon from './SvgIcon';

function ShoppingCart() {
    const { cartState } = useContext(CartContext);
    console.log(cartState);

    if (!cartState.outboundFlight && !cartState.inboundFlight) {
        return (
            <section className="cart cart--void">
                <main className="aside__body cart__content cart__content--void">
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
                </main>
            </section>
        )
    }

    function calculateTotalPrice() {
        const outboundPrice = cartState?.outboundFlight?.price || 0;
        const inboundPrice = cartState?.inboundFlight?.price || 0;

        return (outboundPrice + inboundPrice).toFixed(2).toString().replace('.', ',');
    }

    return (
        <section className="cart">
            <main className="aside__body cart__content">
                Dummy text
            </main>
            <footer className="cart__footer">
                <h4 className="cart__pricing">
                    <span>GRAND TOTAL</span>
                    <span>{calculateTotalPrice()}€</span>
                </h4>
            </footer>
        </section>
    )
}

export default ShoppingCart;