import Price from "./price";
import Brands from "./brands";
import Rating from "./rating";
import "./sidebar.css"

const Sidebar = () => {
    return (
        <main className='sidebar'>
        <Brands />
        <Rating />
        <Price />
        </main>
    )
}

export default Sidebar