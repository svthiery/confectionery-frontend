function NavBar() {
  return (
    <div className="row">
      <nav className="nav-bar col-11">
      <div class="subnav">
    <button class="subnavbtn">Shop <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <a href="#bring">Candy</a>
      <a href="#deliver">Chocolate</a>
      <a href="#package">Best Sellers</a>
      <a href="#express">Sale</a>
    </div>
  </div>
  <div class="subnav">
    <button class="subnavbtn">About <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <a href="https://www.linkedin.com/in/svk12/">LinkedIn</a>
      <a href="#team">GitHub</a>
      <a href="#careers">Email Me</a>
    </div>
  </div>
      </nav>
    </div>
  );
}

export default NavBar;
