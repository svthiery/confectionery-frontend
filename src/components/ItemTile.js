function ItemTile({ primary_img, alt_img, name, price }) {
    return (
        <div className="item-tile col-4">
            <div className="figure item-thumbnail col-12">
                <img src={primary_img} className="item-thumbnail item-thumbnail-primary col-12"></img>
                <img src={alt_img} className="item-thumbnail col-12"></img>
            </div>
            <h4 className="item-name">{name}</h4>
            <h2>${price}</h2>
        </div>
    );
}

export default ItemTile;