import "./price.css"
import FilterContext from "../contexts/FilterContext";
import { useContext } from "react";
import Slider from '@mui/material/Slider';

const Price = () => {
    const { price, setPrice, maxLimit } = useContext(FilterContext);
    const minLimit = 1;

    const minInp = (event) => {
        setPrice([event.target.value, price[1]]);
    };

    const maxInp = (event) => {
        setPrice([price[0], event.target.value]);
    };

    const handleSliderChange = (event) => {
        setPrice(event.target.value);
    };

    return (
        <main>
            <div className="slidecontainer">
                <h4 className="section_header">
                    Price
                </h4>

                <Slider className="slider"
                    max={maxLimit}
                    min={minLimit}
                    getAriaLabel={() => 'Minimum distance'}
                    value={price}
                    onChange={handleSliderChange} />
            </div>

            <div className='inputs'>
                <table>
                    <tr>
                        <th>
                            <label className="min">
                                <p className='mm_text'>Min</p>
                                <input type="number" className='inp_min' value={price[0]} onChange={minInp} />
                            </label>
                        </th>

                        <th>
                            <label className="max">
                                <p className='mm_text'>Max</p>
                                <input type="number" className='inp_max' value={price[1]} onChange={maxInp} />
                            </label>
                        </th>
                    </tr>
                </table>
            </div>
        </main>
    )
}

export default Price