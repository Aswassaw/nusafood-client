import "./Layout.css";
import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";

export default function Layout({}) {
  const renderLayout = () => (
    <div className="layout">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );

  return <>{renderLayout()}</>;
}
