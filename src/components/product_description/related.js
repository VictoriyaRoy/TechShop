import Item from "../common/item";
import '../home_page/hits_new.css'

const Related = ({devices}, {device}) => {
    const filterRelated = devices.filter((element) => {element.category === device.category} )
    return (
        <section className="Related">
            <h3 className="section_header">
                Related
            </h3>
            <ul className="item_list">
                {filterRelated.map(filt_device => {return <Item device={filt_device}/>})}
            </ul>
        </section>
    )
}

export default Related