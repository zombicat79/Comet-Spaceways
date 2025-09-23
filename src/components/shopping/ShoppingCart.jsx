import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { FlightSearchContext } from '../../contexts/FlightSearchContext'

import ShoppingItem from './ShoppingItem';
import SvgIcon from '../SvgIcon';

function ShoppingCart() {
    const { cartState } = useContext(CartContext);
    const { flightSearchState } = useContext(FlightSearchContext);
    console.log(cartState);

    if (!cartState.outboundFlight && !cartState.inboundFlight) {
        return (
            <section className="cart cart--void">
                <main className="aside__body cart__content cart__content--void">
                    <div className="cart__img">
                        <SvgIcon design="ufo" color="#272643" />
                        <p>⁉️</p>
                    </div>
                    <div className="cart__message">
                        <div className="message-box message-box--alert">
                            <p>Your cart is as <span className="highlight">void</span> as the interstellar space</p>
                        </div>
                        <p>Pick some flights and...</p>
                        <h2 className="cart__motto">Go conquer the universe!</h2>
                    </div>
                </main>
            </section>
        )
    }

    function calculateTotalPrice() {
        const outboundPrice = cartState?.outboundFlight?.price || 0;
        const inboundPrice = cartState?.inboundFlight?.price || 0;

        return (Number(outboundPrice) + Number(inboundPrice)).toFixed(2).toString().replace('.', ',');
    }

    return (
        <section className="cart">
            <main className="aside__body cart__content">
                {cartState.outboundFlight && <ShoppingItem isFlight={true} data={cartState.outboundFlight} />}
                {flightSearchState.searchScope === '🔄 Round Trip' && !cartState.outboundFlight &&
                    <div className="cart__message">
                        <div className="message-box message-box--alert">
                            <p>* <span className="highlight">outbound</span> flight still unselected *</p>
                        </div>
                        <hr className="separator separator--dark" />
                    </div>
                }
                {cartState.inboundFlight && <ShoppingItem isFlight={true} data={cartState.inboundFlight} />}
                {flightSearchState.searchScope === '🔄 Round Trip' && !cartState.inboundFlight && 
                    <div className="cart__message">
                        <hr className="separator separator--dark" />
                        <div className="message-box message-box--alert">
                            <p>* <span className="highlight">inbound</span> flight still unselected *</p>
                        </div>
                    </div>
                }
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