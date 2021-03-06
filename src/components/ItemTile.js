import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function ItemTile({
  primary_img,
  alt_img,
  name,
  price,
  id,
  item,
  viewedItem,
  setViewedItem,
  handleAddToCart
}) {
  let match = useRouteMatch();

  function handleClickItem() {
    setViewedItem(item);
  }

  return (
    <div className="item-tile col-4" onClick={handleClickItem}>
    <Link to={`/shop/${id}`}>
        <div className="figure item-thumbnail col-12">
          <img src={primary_img} alt={name} className="item-thumbnail col-12"></img>
          <img
            src={alt_img}
            alt={`Close-up of ${name}`}
            className="item-thumbnail item-thumbnail-alt col-12"
          ></img>
        </div>
        </Link>
        <h4 className="item-name">{name}</h4>
        <h2 className="item-price">${price}</h2>
        <div className="add-to-cart-div col-12">
            <button className="add-to-cart-btn col-6" onClick={() => handleAddToCart(item)}>Add to Cart</button>
        </div>
    </div>
  );
}

export default ItemTile;
