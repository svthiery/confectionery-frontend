
import ItemTile from "./ItemTile";

function ItemContainer({ allItems, viewedItem, setViewedItem }) {

    const itemsList = allItems.map(item => {
        return (
            <ItemTile key={item.id} id={item.id} item={item} name={item.name} primary_img={item.primary_img} alt_img={item.alt_img} price={item.price} viewedItem={viewedItem} setViewedItem={setViewedItem}/>
        )
    })

    return (
        <div className="item-container col-8">{itemsList}</div>
    );
}

export default ItemContainer;