import { Link, NavLink } from "react-router-dom";
import {Navbar, NavbarBrand } from "reactstrap";

function Header() {
  return (
    <Navbar
      className="py-2"
      color="dark"
      dark
    >
      <div className="container">
        <div>
          <Link to='/' style={{color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center'}}>
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
        </div>
      </div>
    </Navbar>
  );
}

export default Header;