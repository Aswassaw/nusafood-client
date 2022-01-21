import "./Navbar.css";
import React from "react";
import Cart from "./Other/Cart";
import ToggleMenu from "./Other/ToggleMenu";
import Menu from "./Other/Menu";
import Logo from "./Other/Logo";

export default function Navbar() {
  const renderNavbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <Logo /> NusaFood
        </a>
        <a className="nav-link ms-auto me-1 d-lg-none" href="#">
          <Cart isActive />
        </a>
        <ToggleMenu />
        <Menu />
      </div>
    </nav>
  );

  return <>{renderNavbar()}</>;
}
