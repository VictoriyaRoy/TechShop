import React, {useState} from 'react';
import './raiting.css'

const Rating = ({patentHandlerrate}) => {

  const [checked, setChecked] = useState([]);
  const checkList = [1, 2, 3, 4 ,5];
  //patentHandlerrate(checkList);

  const handleOnChange = (event) => {
    let v = parseInt(event.target.value)
    var updatedList = [...checked];
    if (!updatedList.includes(v)) {
      updatedList = [...checked, v];
    } else {
      updatedList.splice(updatedList.indexOf(v), 1);
    }
    setChecked(updatedList);
    if (updatedList.length === 0) {
      patentHandlerrate(checkList);
    } else {
      patentHandlerrate(updatedList);
    }
    };

    const stars = ['', '', '', '', '']

    
    return (

        <div className='rate'>
        
        <h4 classNameName="rate_header">
                Rating
        </h4>

        {checkList.map((item, index) => (
          <label className="container_rate">
            <input key={index} type="checkbox" className="checkbox" onChange={handleOnChange} value = {item}/>
              <div className='starcontainer'>
                {stars.slice(0, item).map(() => <span className="star">&#9733;</span>)}     
                {stars.slice(0, 5-item).map(() => <span className="star">&#9734;</span>)}
              </div>
          </label>
        ))}


        </div>

    )
}

export default Rating