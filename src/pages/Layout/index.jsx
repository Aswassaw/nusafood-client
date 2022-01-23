import "./style/Layout.css";
import React from "react";
import Navbar from "../../components/organisms/Navbar";
import Footer from "../../components/organisms/Footer";

export default function Layout({ children }) {
  const renderLayout = () => (
    <div className="layout">
      <Navbar />
      {children}
      <Footer />
    </div>
  );

  return <>{renderLayout()}</>;
}
