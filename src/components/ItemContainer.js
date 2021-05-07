import ItemTile from "./ItemTile";

function ItemContainer({ items, viewedItem, setViewedItem, handleAddToCart }) {
  const itemsList = items.map((item) => {
    return (
      <ItemTile
        key={item.id}
        id={item.id}
        item={item}
        name={item.name}
        primary_img={item.primary_img}
        alt_img={item.alt_img}
        price={item.price}
        viewedItem={viewedItem}
        setViewedItem={setViewedItem}
        handleAddToCart={handleAddToCart}
      />
    );
  });

  return <div className="item-container col-8">
      {itemsList}
      {itemsList.length < 1? <p>There are no items that match your search criteria!</p> : null}
      </div>;
}

export default ItemContainer;
