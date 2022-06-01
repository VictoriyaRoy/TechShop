import './StarRating.css'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
import { IconContext } from 'react-icons';

const StarRating = (props) => {
    const stars = [1,2,3,4,5];

    return (
        <div className="ratingBody">
            <IconContext.Provider value={{color: '#FCBA14', size: 28}}>
                {
                stars.map((star) => {
                    if (star <= props.rating) {
                        return <AiFillStar />
                    } return <AiOutlineStar/>
                }
                )}
            </IconContext.Provider>
        </div>
    );
}

export default StarRating