import {Navbar, NavbarBrand } from "reactstrap";

function Header() {
  return (
    <Navbar
      className="py-2"
      color="dark"
      dark
    >
      <div className="container">
        <NavbarBrand href="#!" className="d-flex align-items-center">
          <img
            alt="logo"
            src='../images/logo.svg'
            style={{
              height: 40,
              width: 40
            }}
          />
          ReactJS meal website
          </NavbarBrand>
      </div>
    </Navbar>
  );
}

export default Header;