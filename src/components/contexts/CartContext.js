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
            body: JSON.stringify({...device}),
            headers: {'Content-Type': 'application/json'}
        })
    };

    const buyCart = () => {
        for (let device of order) {
            removeFromCart(device.id);
            fetch('devices/' + device.id, {
                method: 'PATCH', 
                body: JSON.stringify({"number_of_sales": device.number_of_sales+1}),
                headers: {'Content-Type': 'application/json'}
            })
        }
    }
    
    const removeFromCart = (id) => {
        setOrder((existing) => existing.filter(device => device.id !== id));
        fetch('shopping_cart/'+id, {
            method: 'DELETE',
        })
    };

    return (
        <CartContext.Provider value={{order, addToCart, removeFromCart, buyCart}}>
            {children}
        </CartContext.Provider>
    );
}




export default CartContext;

