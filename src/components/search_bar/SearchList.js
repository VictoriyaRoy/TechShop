import './SearchList.css'
import SearchItem from './SearchItem'

const SearchList = (props) => {

    return (
       <div className='searchBody'>
        {
            props.devices.map((device) => <SearchItem key={device.id} device={device}/>)
        }
       </div> 
    );
}

export default SearchList