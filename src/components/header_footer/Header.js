import './Header.css'
import {FiShoppingCart} from 'react-icons/fi'

const Header = () => {
    const categories = ['Smarthpones', 'Laptops', 'Tablets', 'Accessories']

    return (
        <div className='headerBody'>
            <header>
                <h1>Tech Shop</h1>
                <input className='searchBar' type="text" placeholder="Search Products..."></input>
                <FiShoppingCart size={30}/>
            </header>
            <nav>
                <ul className='navMenu'>
                   {
                    categories.map((title) => {
                        return <li>{title}</li>
                    })
                   } 
                </ul>
            </nav>
        </div>
    );
}

export default Header