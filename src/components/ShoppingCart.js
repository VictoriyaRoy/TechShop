import '../styles/ShoppingCart.css';
import StarRating from './StarRating'
import {MdClose} from 'react-icons/md';

const CartItem = (props) => {
    return (
    <div>
        <div className="itemBody">
            <div className='itemPart'>
                <img src={props.image}/>
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


const ShoppingCart = (props) => {
    return (
        <div className='cartBody'>
            <div className='cartHeader'>
                <h1>Shopping Cart</h1>
                <span className='grayText'>Close <MdClose size={30} color='#151515'/></span>
            </div>
            <CartItem title='Product Title' category='Smartphone' rating='3' price='36.99'/>
            <CartItem title='Product Title' category='Smartphone' rating='3' price='36.99'/>
            <div className='cartFooter'>
                <div>
                    <h2>Total</h2>
                    <h1>73.98 USD</h1>
                </div>
                <button>Go to Checkout</button>
            </div>
        </div>
    );
}


export default ShoppingCart