import ItemTile from "./ItemTile";

function ItemContainer({ allItems }) {

    const itemsList = allItems.map(item => {
        return (
            <ItemTile key={item.id} primary_img={item.primary_img}/>
        )
    })

    return (
        <div className="item-container col-8">{itemsList}</div>
    );
}

export default ItemContainer;