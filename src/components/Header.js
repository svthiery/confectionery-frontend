import { useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import AdBanner from "./AdBanner";

function Header() {

    const history = useHistory();

    function handleClickLogo() {
        history.push("/");
    }

  return (
    <div className="header-div col-12">
      <AdBanner />
            <h1 className="logo-heading" onClick={handleClickLogo}>THE CONFECTIONERY</h1>
      <NavBar />
    </div>
  );
}

export default Header;
