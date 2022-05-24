import Item from "./item";
import '../styles/hits_new.css'

const Hits = () => {
    return (
        <section className="hits">
            <h3 className="section_header">
                Hits
            </h3>
            <ul className="item_list">
                <Item/>
                <Item/>
                <Item/>
            </ul>
        </section>
    )
}

export default Hits