import Item from "../common/item";
import './hits_new.css'

const New = () => {
    return (
        <section className="new">
            <h3 className="section_header">
                New
            </h3>
            <ul className="item_list">
                <Item/>
                <Item/>
                <Item/>
            </ul>
        </section>
    )
}

export default New
