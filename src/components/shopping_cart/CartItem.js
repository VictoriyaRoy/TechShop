import './CartItem.css'
import './CartText.css'
import StarRating from '../common/StarRating'
import {MdClose} from 'react-icons/md';
import CartContext from '../contexts/CartContext';
import { useContext } from 'react';

const CartItem = ({device}) => {
    const { removeFromCart } = useContext(CartContext);

    return (
    <div>
        <div className="cartItemBody">
            <div className='cartPart'>
                <img className='cartImg' src={device.src}/>
                <span className='cartRemove' onClick={() => removeFromCart(device.id)}>
                    <MdClose size={18} color='#151515'/>Remove
                </span>
            </div>
            <div className='cartPart'>
                <h2>{device.title}</h2>
                <div className='cartDesc'>
                    <span className='grayText'>Category</span>
                    <span>{device.category}</span>
                </div>
                <StarRating rating={device.rating}/>
                <h3>{device.price} USD</h3>
            </div>
        </div>
        <div className='underLine'/>
    </div>
    );
}

export default CartItem