import { useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import AdBanner from "./AdBanner";
import ShoppingBag from "../assets/shopping_bag.jpg";
import MagnifyingGlass from "../assets/search_icon.png";
import ProfileIcon from "../assets/profile_icon.png";

function Header({ showCartModal, setShowCartModal, currentOrder }) {
  const history = useHistory();

  function handleClickLogo() {
    history.push("/");
  }

  function handleCartClick() {
    setShowCartModal(true);
  }

  const numItems = currentOrder ? currentOrder.candyOrders.length : "0";

  return (
    <div className="header-div col-12">
      {/* <AdBanner /> */}
      <h1 className="logo-heading" onClick={handleClickLogo}>
        THE CONFECTIONERY
      </h1>
      <div className="row">
        <div className="bag-search-profile-links col-1">
          <img
            src={ProfileIcon}
            className="bag-search-profile-icon col-4"
          ></img>
          <div className="bag-container col-4" onClick={handleCartClick}>
            <img
              src={ShoppingBag}
              className="bag-search-profile-icon col-12"
            ></img>
            <div className="num-items">{numItems}</div>
          </div>
          <img
            src={MagnifyingGlass}
            className="bag-search-profile-icon col-4"
          ></img>
        </div>
        <NavBar />
      </div>
    </div>
  );
}

export default Header;
