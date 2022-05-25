import Item from "../common/item";
import '../home_page/hits_new.css'

const Related = () => {
    return (
        <section className="Related">
            <h3 className="section_header">
                Related
            </h3>
            <ul className="item_list">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </ul>
        </section>
    )
}

export default Related