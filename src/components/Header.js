import NavBar from "./NavBar";
import AdBanner from "./AdBanner";

function Header() {
  return (
    <div className="header-div col-12">
      <AdBanner />
      <h1 className="logo-heading">THE CONFECTIONERY</h1>
      <NavBar />
    </div>
  );
}

export default Header;
