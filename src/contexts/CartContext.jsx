import { createContext } from "react";
import useCart from './../hooks/useCart';

const CartContext = createContext();

function CartProvider({ children }) {
    const { state, dispatch } = useCart();
    console.log(state)

    return (
        <CartContext.Provider value={{cartState: state, cartDispatcher: dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider };