import './Header.css'
import ShoppingCart from '../shopping_cart/ShoppingCart'
import SearchBar from '../search_bar/SearchBar';
import {Link} from "react-router-dom";

const Header = () => {
    const categories = ['Smartphones', 'Laptops', 'Tablets', 'Accessories']

    return (
        <div className='headerBody'>
            <header>
                <h1 className='shopTitle'>Tech Shop</h1>
                <SearchBar/>
                <ShoppingCart/>
                

            </header>
            <nav>
                <ul className='navMenu'>
                   {
                    categories.map((title) => {
                        return  (
                            <li>
                                <Link to={"/" + title.toLowerCase()}>
                                    {title}
                                </Link>
                            </li>
                        )
                    })
                   } 
                </ul>
            </nav>
        </div>
    );
}

export default Header