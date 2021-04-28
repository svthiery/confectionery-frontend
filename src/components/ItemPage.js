import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

function ItemPage({ allItems}) {

    let { itemId } = useParams();

    let selectedItem = allItems.filter(item => item.id == itemId)[0]

    return (
        <div className="row">
            <div className="item-page-main-container col-8">
                <h2>{selectedItem.name}</h2>
                {/* <div className="figure item-thumbnail col-12">
                    <img src={primary_img} className="item-thumbnail col-12"></img>
                    <img src={alt_img} className="item-thumbnail item-thumbnail-alt col-12"></img>
                </div>
                <h4 className="item-name">{name}</h4>
                <h2>${price}</h2> */}
            </div>
        </div>
    );
}

export default ItemPage;