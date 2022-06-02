import Item from "../common/item";
import '../home_page/hits_new.css'

const Related = (props) => {
    const filterRelated = props.devices.filter((element) => {return element.category === props.device.category ||
                                                             element.brand === props.device.brand} )
    return (
        <section className="Related">
            <h3 className="section_header">
                Related
            </h3>
            <ul className="item_list">
                {filterRelated.slice(0,4).map(filt_device => {return <Item device={filt_device}/>})}
            </ul>
        </section>
    )
}

export default Related