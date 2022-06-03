import React, {useState} from 'react';
import './brands.css'

const Brands = ({devices, patentHandlerbrand}) => {


    function check_list(devices){
      let devices_brand = []
      for (var i = 0; i< devices.length; i++){
          if (  !devices_brand.includes(devices[i].brand)){
            devices_brand.push(devices[i].brand)
          }
      }
      return devices_brand
    }

    const [checked, setChecked] = useState([]);
    const checkList = check_list(devices);


    const handleOnChange = (event) => {
      var updatedList = [...checked];
      if (!updatedList.includes(event.target.value)) {
        updatedList = [...checked, event.target.value];
      } else {
        updatedList.splice(updatedList.indexOf(event.target.value), 1);
      }
      setChecked(updatedList);
      if (checkList.length === 0) {
        patentHandlerbrand(checkList);
      } else {
        patentHandlerbrand(updatedList);
      }
      };
    
    return (
    <div className='brands'>
        <h4 classNameName="section_header">
            Brands
        </h4>
        <div className='checkboxes_list'>
          {checkList.map((item, index) => (
            <label className="container_brand" key={index}>
                <input value={item} type="checkbox" className="checkbox" onChange={handleOnChange} />
                <span className="option">{item}</span>
            </label>
          ))}
        </div>
    </div>

    )
}

export default Brands