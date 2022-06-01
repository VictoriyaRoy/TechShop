import './SearchItem.css'

const SearchItem = (props) => {
    return (
       <div className='searchItemBody'>
           <img className='searchImg' src={props.device.src}/>
            <div className='searchAbout'>
                <h1 className='searchTitle'>{props.device.title}</h1>
                <span>{props.device.category}</span>
                <h2 className='searchPrice'>{props.device.price} USD</h2>
            </div>
       </div> 
    );
}

export default SearchItem