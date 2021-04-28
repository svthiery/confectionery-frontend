function ItemTile({ primary_img }) {
    return (
        <div className="item-tile col-4">
            <img src={primary_img} className="item-thumbnail col-12"></img>
        </div>
    );
}

export default ItemTile;