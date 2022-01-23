import "./style/Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import ToggleMenu from "./ToggleMenu";
import Logo from "../../atoms/Logo";
import Menu from "./Menu";
import Cart from "./Cart";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Link className="navbar-brand text-itim" to="/">
          <Logo /> NusaFood
        </Link>
        <a className="nav-link ms-auto me-1 d-lg-none" href="#!">
          <Cart isActive />
        </a>
        <ToggleMenu />
        <Menu />
      </div>
    </nav>
  );
}
