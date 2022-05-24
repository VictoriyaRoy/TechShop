import Item from "../common/item";
import './hits_new.css'

const Hits = ({devices}) => {
    const sortedBySales = devices.sort(function (a, b) {
        return a.number_of_sales < b.number_of_sales ? 1 : -1
    })

    return (
        <section className="hits">
            <h3 className="section_header">
                Hits
            </h3>
            <ul className="item_list">
              {sortedBySales.slice(0, 4).map((device) =>
                  <Item device={device}/>
              )}
            </ul>
        </section>
    )
}

export default Hits