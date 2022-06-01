import './ShoppingCart.css'
import {RiShoppingBasket2Line} from 'react-icons/ri'
import CartList from './CartList'
import { useState } from 'react'

const ShoppingCart = () => {
    const [isShown, setIsShown] = useState(false);
    const [order, setOrder] = useState([{id:1}]);

    const addDevice = (newDevice) => {
        setOrder((existing) => [...existing, newDevice]);
    }

    const removeDevice = (id) => {
        setOrder((existing) => existing.filter(device => device.id !== id));
    }

    return (
        <div className='cartContainer'
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
                <span class='cartIcon'><RiShoppingBasket2Line size={35}/></span>
                {order.length > 0 && <div className='cartCounter'>{order.length}</div>}
                {isShown && <CartList order={order} remove={removeDevice}/>}
        </div>
    );
}

export default ShoppingCart