import NavBar from "./NavBar";
import AdBanner from "./AdBanner";
import Search from "./Search";

function Header() {
  return (
    <div>
      <div>Header</div>
      <AdBanner />
      <NavBar />
      <Search />
    </div>
  );
}

export default Header;
