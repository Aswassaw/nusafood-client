import "./Navbar.css";
import React from "react";
import Cart from "./Partial/Cart";
import ToggleMenu from "./Partial/ToggleMenu";
import Menu from "./Partial/Menu";
import Logo from "./Partial/Logo";

export default function Navbar() {
  const renderNavbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand text-itim" href="/">
          <Logo /> NusaFood
        </a>
        <a className="nav-link ms-auto me-1 d-lg-none" href="#!">
          <Cart isActive />
        </a>
        <ToggleMenu />
        <Menu />
      </div>
    </nav>
  );

  return <>{renderNavbar()}</>;
}
