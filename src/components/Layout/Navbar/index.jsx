import "./Navbar.css";
import React from "react";
import Cart from "./Cart";
import ToggleMenu from "./ToggleMenu";
import Menu from "./Menu";

export default function Navbar() {
  const renderNavbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          NusaFood
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
