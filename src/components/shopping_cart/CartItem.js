import './cart_all.css'
import StarRating from '../common/StarRating'
import {MdClose} from 'react-icons/md';

const CartItem = (props) => {
    return (
    <div>
        <div className="itemBody">
            <div className='itemPart'>
                <img className='itemImg' src={props.image}/>
                <span className='grayText'><MdClose size={18} color='#151515'/>Remove</span>
            </div>
            <div className='itemPart'>
                <h2>{props.title}</h2>
                <div className='itemDesc'>
                    <span className='grayText'>Category</span>
                    <span>{props.category}</span>
                </div>
                <StarRating rating={props.rating}/>
                <h3>{props.price} USD</h3>
            </div>
        </div>
        <div className='underLine'/>
    </div>
    );
}

export default CartItem