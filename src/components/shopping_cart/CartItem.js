import './CartItem.css'
import './CartText.css'
import StarRating from '../common/StarRating'
import {MdClose} from 'react-icons/md';

const CartItem = (props) => {
    return (
    <div>
        <div className="itemBody">
            <div className='itemPart'>
                <img className='itemImg' src={props.device.image}/>
                <span className='itemRemove' onClick={()=>props.remove(props.device.id)}>
                    <MdClose size={18} color='#151515'/>Remove
                </span>
            </div>
            <div className='itemPart'>
                <h2>{props.title}</h2>
                <div className='itemDesc'>
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