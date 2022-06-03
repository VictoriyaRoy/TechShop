import './StarRating.css'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const StarRating = (props) => {
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className="ratingBody">
            {
                stars.map((star) => {
                    if (star <= props.rating) {
                        return <AiFillStar />
                    } return <AiOutlineStar />
                }
                )}
        </div>
    );
}

export default StarRating