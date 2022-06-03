import "./price.css"
import React, { useState } from 'react';
import Slider from '@mui/material/Slider';

const Price = ({ devices, patentHandler }) => {

    function check_l(dev) {
        var max = 1;
        for (var i = 0; i < dev.length; i++) {
            if (dev[i].price > max) {
                max = dev[i].price
            }
        }

        return max
    }

    const max = check_l(devices)
    const min = 1
    const [values, setValue] = useState([min, max]);

    const minInp = (event) => {
        setValue([event.target.value, values[1]]);
        patentHandler([event.target.value, values[1]]);
    };

    const maxInp = (event) => {
        setValue([values[0], event.target.value]);
        patentHandler([values[0], event.target.value]);
    };

    const handleChange1 = (event) => {
        setValue(event.target.value);
        patentHandler(event.target.value);
    };

    // <input type="range" min="1" max="100" value="50" className ="slider" id="myRange"/>

    return (
        <main>
            <div className="slidecontainer">
                <h4 className="section_header">
                    Price
                </h4>



                <Slider className="slider"
                    max={max}
                    min={min}
                    getAriaLabel={() => 'Minimum distance'}
                    value={values}
                    onChange={handleChange1}
                />
            </div>
            <div className='inputs'>

                <table>
                    <tr>
                        <th>
                            <label className="min">
                                <p className='mm_text'>Min</p>
                                <input type="number" className='inp_min' value={values[0]} onChange={minInp} />

                            </label>
                        </th>

                        <th>

                            <label className="max">
                                <p className='mm_text'>Max</p>
                                <input type="number" className='inp_max' value={values[1]} onChange={maxInp} />

                            </label>
                        </th>
                    </tr>
                </table>

            </div>

        </main>
    )
}

export default Price