import Item from "../common/item";
import './hits_new.css'

const New = ({devices}) => {
    const sortedByDate = devices.sort(function (a, b) {
        return a.date < b.date ? 1 : -1
    })

    return (
        <section className="new">
            <h3 className="section_header">
                New
            </h3>
            <ul className="item_list">
              {sortedByDate.slice(0, 4).map((device) =>
                  <Item device={device}/>
              )}
            </ul>
        </section>
    )
}

export default New
