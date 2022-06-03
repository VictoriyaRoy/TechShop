import './SearchItem.css'
import { Link } from 'react-router-dom'

const SearchItem = ({ device }) => {
    return (
        <Link to={'/device_' + device.id}>
            <div className='searchItemBody'>
                <img className='searchImg' src={device.src} />
                <div className='searchAbout'>
                    <h1 className='searchTitle'>{device.title}</h1>
                    <span className='searchCategory'>{device.category}</span>
                    <h2 className='searchPrice'>{device.price} USD</h2>
                </div>
            </div>
        </Link>
    );
}

export default SearchItem