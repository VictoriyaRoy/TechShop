import { createContext, useEffect, useState} from "react";

const CartContext = createContext();

export function CartProvider ({children}) {
    const [order, setOrder] = useState([]);

    
    useEffect(() => {
        fetch('shopping_cart').then(response => response.json()).then(order => {
            setOrder(order)
        })
    }, [])

    const addToCart = (device) => {
        setOrder((existing) => [...existing, device]);
        fetch('shopping_cart', {
            method: 'POST', 
            body: JSON.stringify({...device, id:device.SKU}),
            headers: {'Content-Type': 'application/json'}
        })
    };
    
    const removeFromCart = (SKU) => {
        setOrder((existing) => existing.filter(device => device.SKU !== SKU));
        fetch('shopping_cart/'+SKU, {
            method: 'DELETE',
        })
    };

    return (
        <CartContext.Provider value={{order, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
}




export default CartContext;

