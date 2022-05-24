import './cart_all.css';
import {MdClose} from 'react-icons/md';

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
                <button className='payButton'>Go to Checkout</button>
            </div>
        </div>
    );
}


export default ShoppingCart