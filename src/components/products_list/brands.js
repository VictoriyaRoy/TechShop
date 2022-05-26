import React, {useState} from 'react';
import './brands.css'

const Brands = () => {

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
        Brands
    </h4>

    <label className="container">
        <input type="checkbox" className="checkbox" checked = {isChecked1} onChange={handleOnChange1} />
        <span className="option">Filtre by brand item</span>

    </label>

    <label className="container">
        <input type="checkbox" className="checkbox" checked = {isChecked2} onChange={handleOnChange2} />
        <span className="option">Filtre by brand item</span>


    </label>
                
    <label className="container">
        <input type="checkbox" className="checkbox" checked = {isChecked3} onChange={handleOnChange3} />
        <span className="option">Filtre by brand item</span>


    </label>
                
    <label className="container">
        <input type="checkbox" className="checkbox" checked = {isChecked4} onChange={handleOnChange4} />
        <span className="option">Filtre by brand item</span>


    </label>
                
    <label className="container">
        <input type="checkbox" className="checkbox" checked = {isChecked5} onChange={handleOnChange5} />
        <span className="option">Filtre by brand item</span>

    </label>

</div>
    )
}

export default Brands