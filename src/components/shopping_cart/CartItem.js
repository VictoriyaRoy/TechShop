import './CartItem.css'
import './CartText.css'
import StarRating from '../common/StarRating'
import {MdClose} from 'react-icons/md';

const CartItem = (props) => {
    return (
    <div>
        <div className="cartItemBody">
            <div className='cartPart'>
                <img className='cartImg' src={props.device.image}/>
                <span className='cartRemove' onClick={()=>props.remove(props.device.id)}>
                    <MdClose size={18} color='#151515'/>Remove
                </span>
            </div>
            <div className='cartPart'>
                <h2>{props.title}</h2>
                <div className='cartDesc'>
                    <span className='grayText'>Category</span>
                    <span>{props.device.category}</span>
                </div>
                <StarRating rating={props.device.rating}/>
                <h3>{props.device.price} USD</h3>
            </div>
        </div>
        <div className='underLine'/>
    </div>
    );
}

export default CartItem