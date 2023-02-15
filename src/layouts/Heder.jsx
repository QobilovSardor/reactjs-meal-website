import { Link } from "react-router-dom";
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
          <Link to='/' style={{color: 'white', textDecoration: 'none', display: 'flex'}}>
            <img
              alt="logo"
              src='../images/logo.svg'
              style={{
                height: 40,
                width: 40
              }}
            />
            ReactJS meal website
          </Link>
          </NavbarBrand>
      </div>
    </Navbar>
  );
}

export default Header;