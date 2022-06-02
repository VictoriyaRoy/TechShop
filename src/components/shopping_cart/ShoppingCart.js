import './ShoppingCart.css'
import {RiShoppingBasket2Line} from 'react-icons/ri'
import CartList from './CartList'
import { useState } from 'react'
import { useEffect } from 'react'

const ShoppingCart = () => {
    const [isShown, setIsShown] = useState(false);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch('shopping_cart').then(response => response.json()).then(order => {
            setOrder(order)
        })
    }, [])

    const removeDevice = (id) => {
        setOrder((existing) => existing.filter(device => device.id !== id));
        fetch('shopping_cart/'+id, {
            method: 'DELETE',
        })
    }

    return (
        <div className='cartContainer'
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
                <span className='cartIcon'><RiShoppingBasket2Line size={35}/></span>
                {order.length > 0 && <div className='cartCounter'>{order.length}</div>}
                {isShown && <CartList order={order} remove={removeDevice}/>}
        </div>
    );
}

export default ShoppingCart
