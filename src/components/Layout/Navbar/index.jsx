import React from "react";
import { FaSearch } from "react-icons/fa";
import Cart from "./Cart";

export default function Navbar() {
  const renderNavbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          NusaFood
        </a>
        <a style={{ color: "#4A4A4B" }} className="ms-auto me-3 d-lg-none">
          <Cart />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Browse
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Register
              </a>
            </li>
            <li className="nav-item d-none d-lg-block">
              <a className="nav-link" aria-current="page" href="#">
                <Cart />
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );

  return <>{renderNavbar()}</>;
}
