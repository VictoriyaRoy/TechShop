import './ShoppingCart.css'
import {RiShoppingBasket2Line} from 'react-icons/ri'
import CartList from './CartList'
import { useState, useContext } from 'react'
import CartContext from '../contexts/CartContext';

const ShoppingCart = () => {
    const { order } = useContext(CartContext);
    const [isShown, setIsShown] = useState(false);

    return (
        <div className='cartContainer'
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
                <span className='cartIcon'><RiShoppingBasket2Line size={35}/></span>
                {order.length > 0 && <div className='cartCounter'>{order.length}</div>}
                {isShown && <CartList/>}
        </div>
    );
}

export default ShoppingCart
