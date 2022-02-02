import "./style/LandingPage.css";
import React, { useEffect } from "react";
import Banner from "./Banner.jsx";
import BestProduct from "./BestProduct";
// import Map from "./Map";

export default function LandingPage() {
  useEffect(() => {
    document.title = "NusaFood - Heaven Of Taste";
  }, []);

  return (
    <main>
      <Banner />
      <BestProduct />
      {/* <Map /> */}
    </main>
  );
}
