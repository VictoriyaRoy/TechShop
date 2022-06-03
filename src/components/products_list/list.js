import Item from "../common/item";
import "./list.css"


const List = ({devices}) => {
    
    const sortedBySales = devices.sort(function (a, b) {
        return a.number_of_sales < b.number_of_sales ? 1 : -1
    })
    
    
    return (
        <section className="list">
            <ul className="items">
              {sortedBySales.slice(0, 4).map((device) =>
                  <Item device={device}/>
              )}
            </ul>
            
        </section>
    )
}

export default List