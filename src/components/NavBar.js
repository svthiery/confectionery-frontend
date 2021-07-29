function NavBar() {
  return (
    <div className="row">
      <nav className="nav-bar col-11">
        <div class="subnav subnav-shop">
          <button class="subnavbtn">
            SHOP <i class="fa fa-caret-down"></i>
          </button>
          <div class="subnav-content">
            <a href="#candy">Candy</a>
            <a href="#chocolate">Chocolate</a>
            <a href="#bestsellers">Best Sellers</a>
            <a href="#sale">Sale</a>
          </div>
        </div>
        <div class="subnav subnav-about">
          <button class="subnavbtn">
            ABOUT <i class="fa fa-caret-down"></i>
          </button>
          <div class="subnav-content">
            <a href="https://www.linkedin.com/in/svk12/" target="_blank">LinkedIn</a>
            <a href="https://github.com/svthiery" target="_blank">GitHub</a>
            <a href="mailto:sarahvthiery@gmail.com" target="_blank">Email Me</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
