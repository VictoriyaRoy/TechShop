import React, {useState} from 'react';
import './raiting.css'

const Rating = () => {

    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [isChecked4, setIsChecked4] = useState(false);
    const [isChecked5, setIsChecked5] = useState(false);

    const handleOnChange1 = () => {
        setIsChecked1(!isChecked1);
      };
      const handleOnChange2 = () => {
        setIsChecked2(!isChecked2);
      };
      const handleOnChange3 = () => {
        setIsChecked3(!isChecked3);
      };
      const handleOnChange4 = () => {
        setIsChecked4(!isChecked4);
      };
      const handleOnChange5 = () => {
        setIsChecked5(!isChecked5);
      };

    
    return (

        <div>

        <h4 classNameName="section_header">
                Rating
            </h4>

        <label className="container">
        <input type="checkbox" className="checkbox" checked = {isChecked1} onChange={handleOnChange1} />
        
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>

        </label>


        <label className="container">
        <input type="checkbox" className="checkbox" checked = {isChecked2} onChange={handleOnChange2} />

            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star unchecked"></span>

        </label>
                
        <label className="container">
        <input type="checkbox" className="checkbox" checked = {isChecked3} onChange={handleOnChange3} />
        
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star unchecked"></span>
            <span className="fa fa-star unchecked"></span>

        </label>
                
        <label className="container">
        <input type="checkbox" className="checkbox" checked = {isChecked4} onChange={handleOnChange4} />
        
        
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star unchecked"></span>
            <span className="fa fa-star unchecked"></span>
            <span className="fa fa-star unchecked"></span>

        </label>
                
        <label className="container">
        <input type="checkbox" className="checkbox" checked = {isChecked5} onChange={handleOnChange5} />
        
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star unchecked"></span>
            <span className="fa fa-star unchecked"></span>
            <span className="fa fa-star unchecked"></span>
            <span className="fa fa-star unchecked"></span>

        </label>

        </div>

    )
}

export default Rating