import React, { useState } from 'react';
import './raiting.css'
import FilterContext from "../contexts/FilterContext";
import { useContext } from "react";

const Rating = () => {
    const { rating, setRating } = useContext(FilterContext);
    const stars = [1, 2, 3, 4, 5];

    const handleOnChange = (event) => {
        let v = parseInt(event.target.value)
        let updatedList = [...rating];
        if (!updatedList.includes(v)) {
            updatedList = [...rating, v];
        } else {
            updatedList.splice(updatedList.indexOf(v), 1);
        }

        setRating(updatedList);
    };

    return (
        <div className='rate'>
            <h4 className="rate_header">
                Rating
            </h4>
            {stars.map((item, index) => (
                <label className="container_rate">
                    <input key={index} type="checkbox" className="rate_checkbox"
                        onChange={handleOnChange} value={item} checked={rating.includes(item)} />
                    <div className='starcontainer'>
                        {stars.slice(0, item).map(() => <span className="star">&#9733;</span>)}
                        {stars.slice(0, 5 - item).map(() => <span className="star">&#9734;</span>)}
                    </div>
                </label>
            ))}
        </div>
    )
}

export default Rating