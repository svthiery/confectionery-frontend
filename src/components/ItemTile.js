import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

function ItemTile({ primary_img, alt_img, name, price, id, item, viewedItem, setViewedItem }) {
    let match = useRouteMatch();

    function handleClickItem() {
        setViewedItem(item)
    }

    return (
        <Link to={`/shop/${id}`}>
            <div className="item-tile col-4" onClick={handleClickItem}>
                <div className="figure item-thumbnail col-12">
                    <img src={primary_img} className="item-thumbnail col-12"></img>
                    <img src={alt_img} className="item-thumbnail item-thumbnail-alt col-12"></img>
                </div>
                <h4 className="item-name">{name}</h4>
                <h2>${price}</h2>
            </div>
        </Link>
    );
}

export default ItemTile;