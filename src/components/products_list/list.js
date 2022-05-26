import Item from "../common/item";
import "./list.css"


const List = () => {
    return (
        <main className="list">
            <ul className="items">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </ul>
        </main>
    )
}

export default List