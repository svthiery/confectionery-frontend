import NavBar from "./NavBar";
import AdBanner from "./AdBanner";
import Search from "./Search";

function Header() {
  return (
    <div className="header-div col-12">
      <div>Header</div>
      <AdBanner />
      <NavBar />
      <Search />
    </div>
  );
}

export default Header;
