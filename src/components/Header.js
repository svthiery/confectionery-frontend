import { useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import AdBanner from "./AdBanner";
import ShoppingBag from "../assets/shopping_bag.jpg"

function Header({ showCartModal, setShowCartModal }) {

    const history = useHistory();

    function handleClickLogo() {
        history.push("/");
    }

    function handleCartClick() {
        setShowCartModal(true)
    }

  return (
    <div className="header-div col-12">
      {/* <AdBanner /> */}
    <h1 className="logo-heading" onClick={handleClickLogo}>THE CONFECTIONERY</h1>
    <img src={ShoppingBag} className="shopping-bag-icon col-1" onClick={handleCartClick}></img>
      <NavBar />
    </div>
  );
}

export default Header;
