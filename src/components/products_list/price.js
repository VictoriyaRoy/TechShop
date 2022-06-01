import "./price.css"

const Price = () => {

    return (
        <main>
        <div className ="slidecontainer">
                    <h4 className="section_header">
                Price
            </h4>

        <input type="range" min="1" max="100" value="50" className ="slider" id="myRange"/>

        </div>
        <div className = 'inputs'>

            <table>
                <tr>
                    <th>
                    <label className="min">
                        <p className='mm_text'>Min</p>
                        <input type="text" className = 'inp_min'/>

                    </label>
                    </th>

            <th>

            <label className="max">
                <p className='mm_text'>Max</p>
                <input type="text" className = 'inp_max' />

            </label>
            </th>
            </tr>
            </table>

        </div>
        <table className = 'buttons'>
            <tr>
            <th>
        <button className="aply">
                    Aply
        </button>
        </th>

<th>
        <button className="reset">
            Reset
        </button>
        </th>
        </tr>
        </table>
        </main>
    )
}

export default Price