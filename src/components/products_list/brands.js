import './brands.css'
import FilterContext from "../contexts/FilterContext";
import { useContext } from "react";

const Brands = () => {
    const { allDevices, brands, setBrands } = useContext(FilterContext);

    function getAllBrands(devices) {
        let devices_brand = []
        for (let i = 0; i < devices.length; i++) {
            if (!devices_brand.includes(devices[i].brand)) {
                devices_brand.push(devices[i].brand)
            }
        }
        return devices_brand
    }

    const handleOnChange = (event) => {
        let updatedList = [...brands];
        if (!updatedList.includes(event.target.value)) {
            updatedList = [...brands, event.target.value];
        } else {
            updatedList.splice(updatedList.indexOf(event.target.value), 1);
        }
        setBrands(updatedList);
    };

    return (
        <div className='brands'>
            <h4 className="section_header">
                Brands
            </h4>
            <div className='checkboxes_list'>
                {getAllBrands(allDevices).map((item, index) => (
                    <label className="container_brand" key={index}>
                        <input value={item} type="checkbox" className="brand_checkbox"
                            onChange={handleOnChange} checked={brands.includes(item)} />
                        <span className="option">{item}</span>
                    </label>
                ))}
            </div>
        </div>

    )
}

export default Brands