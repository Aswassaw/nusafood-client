import "./style/LandingPage.css";
import React from "react";
import Banner from "./Banner.jsx";
import BestProduct from "./BestProduct";

export default function LandingPage() {
  return (
    <main>
      <Banner />
      <BestProduct />
    </main>
  );
}
